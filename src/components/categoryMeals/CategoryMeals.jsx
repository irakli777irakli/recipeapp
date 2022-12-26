import React from 'react'
import CategoryMealContent from './CategoryMealContent'

export default function CategoryMeals({categoryItems,addToCart,categoryName}) {


  return (
    categoryItems?.map((item)=>{
        if(!item.meals){
            return item.map((recipe,i)=>{
               return <CategoryMealContent key={i} recipe={recipe} addToCart={addToCart} categoryName={categoryName}/>
              })
        }else{
          return item.meals.map((recipe,i)=>{
               return <CategoryMealContent key={i} recipe={recipe} addToCart={addToCart} categoryName={categoryName}/>
              })
        }
      
      }) 
  )
}


