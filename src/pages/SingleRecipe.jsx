import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';


export default function SingleRecipe() {
  const {id} = useParams()
  const {addToCart,singleRecipe,getSingleItem,removeFromCart,inCart} = useGlobalContext()
  

 
  const handleCart = (id) =>{
    addToCart(id)
  }

  useEffect(()=>{
    getSingleItem(id,"singleRecipePage")

  },[id])

  return (
    <section className='singleRecipe_init'>
      <div className='name_category'>
        <h1>{singleRecipe && singleRecipe[0]?.strMeal}</h1>
        <p>{singleRecipe && singleRecipe[0]?.strCategory}</p>
      </div>
      <div className='Srecipe'>
        <div className='single_recipe_img_wrapper'>
          <img src={singleRecipe && singleRecipe[0]?.strMealThumb} alt={ singleRecipe && singleRecipe[0]?.strMeal} className="singleRecipe_img" />
        </div>
        <div className='single_recipe_stats_wrapper'>
          {singleRecipe?.map((item,i)=>{
            const {strArea: area, strInstructions: instructions, 
              strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5, strSource:source,
              strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5} = item;
              return (
                <>
                 <div className='area_instruction'>
                  <p className='from'>from <strong>{area}</strong></p>
                  <div className='instr'>
                  <h4>Instructions</h4>
                  <p>{instructions}</p>
                  </div>
                 </div>
                 <div className='ingredients'>
                  <div className='ingredients_l'>
                    <h4 className='ingredients_title'>Some of the Ingredients</h4>
                    <div className='ingr_holder'>
                      <span>{strIngredient1}</span>
                      <span>{strIngredient2}</span>
                      <span>{strIngredient3}</span>
                      <span>{strIngredient4}</span>
                      <span>{strIngredient5}</span>
                    </div>
                  </div>
                  <div className='ingredients_r'>
                    <h4 className='ingredients_title'>Cooking Measures</h4>
                    <div className='ingr_holder'>
                    <span>{strMeasure1}</span>
                    <span>{strMeasure2}</span>
                    <span>{strMeasure3}</span>
                    <span>{strMeasure4}</span>
                    <span>{strMeasure5}</span>
                    </div>
                  </div>
                 </div>
                 
                 <div className='info_addF'>
                  
                  {/* remove item from `singleRecipe page` and navigate Home */}
                  {inCart(id) ?  <button className='removeSingleMeal' onClick={() => {removeFromCart(id)}}>Remove</button> : <button className='addSingleMeal' onClick={() => handleCart(id)}>Add to Favorites</button>}
                  
                 </div>
                 </>
              )

          })}
        </div>
      </div>
    </section>
  )
}


