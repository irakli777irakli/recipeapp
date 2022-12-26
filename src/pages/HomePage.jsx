import React, { useState } from 'react'
import Category from '../components/category/Category'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import {featured_recipes} from '../featured_data'

export default function HomePage() {

  const [activeRecipe,setActiveRecipe] = useState(2)

  const increase = () =>{
    if(activeRecipe === featured_recipes.length - 1){
      setActiveRecipe(0)
    }else{
      setActiveRecipe(activeRecipe + 1)
    }
  }


  const decrease = () =>{
    if(activeRecipe === 0){
      setActiveRecipe(featured_recipes.length - 1)
    }else{
      setActiveRecipe(activeRecipe - 1)
    }
  }

  return (
    <>
    <section className='homePage_init'> 
    <div className="homePage-center">
      <h1 className='title'>Recipe Store <strong className='emph'>YalaVa</strong>, You will not go wrong here</h1>
      <div className='categories'>
      <Category cate={"Meat"} image={"https://www.themealdb.com/images/category/pork.png"}/>
      <Category cate={"Fish"} image={"https://www.themealdb.com/images/category/seafood.png"}/>
      <Category cate={"Vegetable"} image={"https://www.themealdb.com/images/category/vegan.png"}/>
      </div>
      <h1 className='featured_title'>Recipes Of the Day</h1>
      <div className='featured_recipes' >
        <FaArrowLeft  className='left_arrow' onClick={()=> decrease()}/>
        {featured_recipes.map((recipe,i)=>{
          return  <Category cate={recipe.cate} image={recipe.image} featured={recipe.featured} key={i} index={i} arecipe={activeRecipe} featured_id ={recipe.id}/>

        })}

        <FaArrowRight className='right_arrow' onClick={() => increase()}/>


      </div>
      </div>
    </section>
    <footer >
      <p className='footer_brandName'>YalaVa</p>
      <div className='date_copyWrapper'>
      <p>All rights recieved &copy;</p>
      <span>{new Date().getFullYear()}</span>
      </div>
      
    </footer>
    </>
  )
}



// handle feature recipes navigation
// footer
// fix onHover stuff
// fetch recipes on every based on category.

// apply filter
// single Recipe page.
// add to favorites functional
// local storage.