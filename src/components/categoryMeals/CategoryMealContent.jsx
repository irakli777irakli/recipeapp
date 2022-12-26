import React from 'react'
import {FaSearch,FaPlusCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


export default function CategoryMealContent({recipe,addToCart, categoryName}) {
   
    const navigate = useNavigate()

    const handleAdd = (id) =>{
        addToCart(id)
      }
    
      const handleSingleRecipe = (id) => {
        navigate(`/recipe/${id}`,{state: {catname:categoryName}})
      }

    const {idMeal: id, strMeal: name, strMealThumb: image,} = recipe



  return (
    
    <article className='single_recipe' key={id}>
        <img src={image} alt={name} className="single_recipe_img"/>
        <div className='detail_add_wrapper'>
            <span className="s_recipe_detail"><FaSearch onClick={()=> handleSingleRecipe(id)}/></span>
            <span className="s_recipe_add" onClick={() => handleAdd(id)}><FaPlusCircle/></span>
        </div>
        <div className='recipe_name'>
            <span className='r_name'>{name}</span>
        </div>
    </article>

    )
  
}
