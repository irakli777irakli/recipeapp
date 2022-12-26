import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'


export function LogoBrand({setHamburger}) {

    const navigate = useNavigate()
const homeNavigate = () =>{
    navigate('/');
    setHamburger(false);
}
return (
    <div className='logo_brand'>
        <img src='https://cdn-icons-png.flaticon.com/512/562/562678.png' className='logo_img' alt='logo'/>
        <span className='brand' onClick={()=> homeNavigate()}>YalaVa</span>
        
    </div>
)
}

export function UlElement({setIsSidebarOpen,setHamburger}){
    const navigate = useNavigate()
    const homeNavigate = () =>{
        navigate('/')
    }

    const scroll = (whichone) => {
        homeNavigate()
        setIsSidebarOpen(false);
        setHamburger(false);
    if(whichone === "abu"){
        console.log(window.innerHeight)
        // to scroll at the button regardless of px count
        window.scrollBy(0,window.innerHeight + 3120);
    }
    //    hardcoded value. I know that nav is 70px.
    if(whichone === "exp"){
        window.scrollBy(0,70)
    }
    
    }
    

    return (
        <ul >
        <li onClick={()=>scroll("exp")}>Explore</li>
        <li onClick={()=>scroll("abu")}>About Us</li>
    
    </ul>
    )
}
