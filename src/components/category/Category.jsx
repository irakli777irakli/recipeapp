import React from 'react'
import './Category.css'
import { useNavigate } from 'react-router-dom'
import {BsFillXCircleFill} from 'react-icons/bs'
import { useGlobalContext } from '../../context';


export default function Category({cate,image,featured,index,arecipe,isSingleRecipe,id,featured_id}) {

    const navigate = useNavigate();
    const {removeFromCart} = useGlobalContext()

    const handleNavigate = (name,isFeatured)=>{
        if(isFeatured){
            navigate(`/recipe/${name}`)
        }else{

        
        navigate(`/${name}`)
        }
    }

    return (
    <article className={`${featured ? 'single_featured_category': 'single_category'} ${index === arecipe ? "active" : ''}`}>
        <img src={image} alt={cate}  className={`${featured ? "single_featured_category_img": "single_category_img"}`}/>
        {featured ? <div className='featured_name_wrapper'>
            <span className='featured_name'>{cate}</span>
            <span className='show_details' onClick={()=> handleNavigate(featured_id,true)}>Details</span>
            
        </div>

            : <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <span className='single_category_name' onClick={isSingleRecipe ? ()=> handleNavigate(id,true) : ()=>handleNavigate(cate,false)}  >{cate}</span>
            {/* remove from cart */}
            {isSingleRecipe && < BsFillXCircleFill className='rSingleItem' onClick={() => removeFromCart(id)}/>}
            </div>

            }
            
            

    </article>
  )
}
