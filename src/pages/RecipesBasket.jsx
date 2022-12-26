import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import Category from '../components/category/Category'
export default function RecipesBasket() {

    const {cartItems,cart,getSingleItem,setCartItems} = useGlobalContext()

    const updateBasket = async () => { 
            await getSingleItem("","CategoryPage")  
    }

    useEffect(()=>{
        if(cart?.length > 0){
            updateBasket()
        }else{
            setCartItems([])
        }
        
    },[cartItems !== [],cart])

  return (
    <section className='recipeBasket_init'>
        {(cartItems === undefined || cartItems?.length === 0)? <h1 className='nrecipe'>No Recipes Found</h1> : <h1 className='yrecipe'>Your Favorite Recipes</h1>}
        <div className='recipe_cart_wrapper'>
            {cartItems && cartItems?.map((item)=>{
                return item.meals.map((singleItem,i)=>{
                    const {strMeal:name, strMealThumb:image,idMeal:id} = singleItem;
                    return <Category cate={name.substring(0,12)} image={image} featured={false} key={i} isSingleRecipe={true} id={id}/>
                })
            })}
        </div>
    </section>
  )
}



// add toggle and remove functinallity
// when clicked to detail if add remove functionallity.