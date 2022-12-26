import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Filter from '../components/filters/Filter'
import CategoryMeals from '../components/categoryMeals/CategoryMeals'

export default function SingleCategory() {

  const navigate = useNavigate()

  const {categoryName} = useParams()

  const {meat,setMeat,fish,setFish,veg,setVeg,sorted,addToCart} = useGlobalContext()

 
  const determineWhatToMap = (categoryName) =>{
    
    if(categoryName === "Meat"){
      return meat
    }else if(categoryName === "Fish"){
     return fish
    }else if(categoryName === "Vegetable"){
      return veg
    }
  }
  
  const determineCategory = (response, categoryName) =>{
    if(categoryName === "Meat" && meat?.length === 0){
      setMeat(response)
    }else if(categoryName === "Fish" && fish?.length === 0){
     setFish(response)

    }else if(categoryName === "Vegetable" && veg?.length === 0){
      setVeg(response)
    

 
    }
  }

  const determineFetch = (catName) =>{
    if(catName === "Meat"){
      return ["Beef","Chicken"]
    }else if(catName === "Fish"){
      
      return ["SeaFood"]
    }else if(catName === "Vegetable"){
      return ["Vegetarian","Vegan"]
    }else{
      
    }
  }


  useEffect(()=>{
    if(!['Meat','Fish','Vegetable'].includes(categoryName)){
      return navigate("/error")
    }
    const fetchData = async () =>{
      const response = await Promise.all(determineFetch(categoryName)?.map((el)=>{  
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${el}`).then(response => response.json())
      }))
     // setting meal state
      determineCategory(response,categoryName)
    }
    if(determineWhatToMap(categoryName)?.length === 0){
      fetchData()
    }
   
  },[categoryName,sorted])


 

  return (
    <section className='single_category_init'>
       <h1>Expore <strong className='emph'>{categoryName}</strong> Category</h1>
      <p>Happy cooking</p>
      <div className='filter_recipes'>
        <div className='l-side'>
          <Filter category={categoryName}/>
        </div>
        <div className='r-side'>
          {/* at first render from category arr/ when sorted render sorted. once there's no char in filter render sorted arr with all items */}
          {sorted === undefined ? determineWhatToMap(categoryName) && <CategoryMeals categoryName={categoryName} addToCart={addToCart} categoryItems={determineWhatToMap(categoryName)} />
          : 
          <CategoryMeals categoryName={categoryName} addToCart={addToCart} categoryItems={sorted}/>}
        </div>
      </div> 
    </section>
  )
}



