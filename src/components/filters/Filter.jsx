import React, { useState } from 'react'
import './Filter.css'
import { useGlobalContext } from '../../context'


export default function Filter({category}) {
   
    const {filterByName} = useGlobalContext()


   
  return (
    <div className='filter_wrapper'>
        <form>
            <input type="text" placeholder='Type Recipe Name' onChange={(e) => filterByName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),category)}/>
            <span className='filter_search'>Search</span>
        </form>
    </div>
  )
}

