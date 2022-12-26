import React, { useEffect, useState } from 'react'
import './FavoritesSidebar.css'
import { useGlobalContext } from '../../context'
import SidebarItems from './SidebarItems'
import { useNavigate } from 'react-router-dom'


export default function FavoritesSidebar() {

  const {cart,getSingleItem,cartItems, removeFromCart} = useGlobalContext()
  const [cartItemsLoading,setCartItemsLoading] = useState(false);
 
  const navigate = useNavigate()

  const handleReCipeBusket = () =>{
    navigate(`/recipeBasket`)
  }

  async function populateCart(){
    setCartItemsLoading(true)
    await getSingleItem("","CategoryPage")
    setCartItemsLoading(false)
  }
  useEffect(()=>{
   
    if(cart?.length >= 0){
      populateCart()
    }
   
  },[cart])

  return (
  
    <section className="favorites_sidebar_init">
        <span className='favorites_title'>Favorite Meals</span>
        <div className='meal_list'>
        {cart?.length === 0  ? <h1 style={{color:'#C69749',fontWeight:"bold",fontFamily:"Ubuntu,serif"}}>
          No Favorite Recipe Found
          </h1> 
          :
          cartItemsLoading ? <p style={{color:"white"}}>Loading</p> 
          :
          (cartItems && cartItems?.length <= 2 ) ? 
  
        <SidebarItems removeFromCart={removeFromCart} cartItems={cartItems}/>   
        : 
          <SidebarItems removeFromCart={removeFromCart} cartItems={cartItems?.slice(1,3)} />
        
        }
         {cartItems?.length >=3 && <span className='see_more_recipes' onClick={()=>handleReCipeBusket()}>See More</span>}
          
           
            
        </div>
    </section>
  )
}


