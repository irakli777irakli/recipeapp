import React from 'react'
import './FavoritesSidebar.css'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'




export default function SidebarItems({cartItems,removeFromCart}) {


  const navigate = useNavigate()

  const handleReCipeBusket = () =>{
    navigate(`/recipeBasket`)
  }

  return (
    cartItems?.map((item)=>{
        return item.meals.map((recipe,i)=>{
          const {strMealThumb: image, strMeal: name, idMeal:id} = recipe;
          return <div className='single_meal_wrapper' key={i}>
          <img src={image} alt='meal1' className='recipe_img'  />
          <p className='single_meal_name'>{name}</p>
         <button className='remove_item' onClick={()=> removeFromCart(id)}>Remove</button>
          <FaSearch className='details' onClick={()=> handleReCipeBusket()}/>
         
      </div>

        })
      })
  )
}
