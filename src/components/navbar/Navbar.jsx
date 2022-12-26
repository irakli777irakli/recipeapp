import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {BsHeartFill} from 'react-icons/bs'
import FavoritesSidebar from '../sidebar/FavoritesSidebar'
import { useGlobalContext } from '../../context'
import {useWindowSize} from './Hamburger'
import { LogoBrand,UlElement } from './helper'
import {FaBars,FaWindowClose} from 'react-icons/fa';



export default function Navbar() {
    const [hamburger,setHamburger] = useState(false);

    const width = useWindowSize();
    if(width > 500 && hamburger === true){
        setHamburger(false);
      }

    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const{cart} = useGlobalContext()

    
    useEffect(()=>{
        // when cart `id` of meals changes Nav must eable Sidebar to re render recipes
        // otherwise only when sidebar is onpen than it can perform the action
        
    },[cart])
    
    
  return (
    <nav className='main_nav'>
        <div className='nav_inner__div'>
          {(hamburger && width < 572 )? 
          <aside className="hamburger">
            <div className="hamburger-area">
            <FaWindowClose onClick={()=> setHamburger(false)} className="hamburger-close-btn"/>
            <LogoBrand setHamburger={setHamburger}/>
            <UlElement setIsSidebarOpen={setIsSidebarOpen} setHamburger={setHamburger}/>
            
            </div>
        </aside> :
            width < 572 ? <FaBars onClick={()=> setHamburger(true)}/> : null
          }

         
          {width > 574 && <LogoBrand setHamburger={setHamburger}/>}
            <div className='about_search_etc'>
               {width > 574 && <UlElement setIsSidebarOpen={setIsSidebarOpen} setHamburger={setHamburger}/>}
                <div className='favorites_wrapper'>
                <BsHeartFill className='favorites_toggle' onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
                <div className='favorites_amount_div'>
                    <p className='favorite_count'>{cart?.length || 0}</p>
                </div>
                </div>
                {isSidebarOpen && <FavoritesSidebar/>}
                
            </div>
        </div>
    </nav>
  )
}
