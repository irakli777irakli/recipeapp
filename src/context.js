import React, { useContext, useState } from "react";


const AppContext = React.createContext()



const AppProvider = ({children})=>{

    const [meat,setMeat] = useState([])
    const [fish,setFish] = useState([])
    const [veg,setVeg] = useState([])
    const [sorted,setSorted] = useState()

    // storing id's of recipes
    const [cart,setCart] = useState(localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [])

    const [singleRecipe,setSingleRecipe] = useState()

    //storing actual data of recipes based on cart id's
    const [cartItems,setCartItems] = useState([])

    const inCart = (id) =>{
        const result = cart.find((singleId) => singleId === id )
        if(result){
            return true
        }else{
            return false
        }
    }

    const getSingleItem = async (id,category) =>{
        if(category === "singleRecipePage" && id !== ""){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(response => response.json())
        setSingleRecipe(response.meals)
        
        }
        else{
          
            const response = await Promise.all(cart.map((item)=>{
                return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`).then(response => response.json())
            }));
            
            setCartItems(response)
        
        
        }
      }

    const filterByName = (letter,category) =>{
      
        let tempMeat = [...meat];
        let tempFish= [...fish]; 
        let tempVeg = [...veg];
        
          

        if(category === "Meat"){
            tempMeat = tempMeat.map((item)=> item.meals.filter((recipe)=> recipe.strMeal.includes(letter)))
            setSorted(tempMeat)
            
        }else if(category === "Fish"){
            tempFish = tempFish.map((item)=> item.meals.filter((recipe)=> recipe.strMeal.includes(letter)))
            setSorted(tempFish)

        }else if(category === "Vegetable"){
            tempVeg = tempVeg.map((item)=> item.meals.filter((recipe)=> recipe.strMeal.includes(letter)))   
            setSorted(tempVeg)
        }   
        
    }


    const addToCart = (id) =>{
        if(cart.indexOf(id) === -1){
            setCart([...cart,id])
            localStorage.setItem("Cart",JSON.stringify([...cart,id]));
        }
    }


    const removeFromCart = async (id) =>{
    
    setCart(cart.filter((recipe)=> recipe !== id))
    localStorage.setItem("Cart",JSON.stringify(cart.filter((recipe)=> recipe !== id)));

    
}


  

    return <AppContext.Provider value={{meat,setMeat,fish,setFish,veg,setVeg,filterByName,sorted,addToCart,cart,getSingleItem,singleRecipe,cartItems,removeFromCart,inCart,setCartItems}}>
        {children}
    </AppContext.Provider>
}



export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,AppContext}



