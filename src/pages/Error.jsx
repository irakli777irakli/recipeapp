import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  const navigate = useNavigate()
    return (
    <div style={{ marginTop:"100px",textAlign:"center",display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:'center',justifyContent:"center",gap:'1rem'}}>

        <h1 style={{fontSize:"2.5rem",fontFamily:"sans-serif",fontWeight:"500"}}>404 PAGE NOT FOUND</h1>
        <button onClick={()=> navigate("/")} 
        style={{fontSize:"1.7rem",padding:"0.5rem",textAlign:"center",backgroundColor:"#CEEDC7"}}>
            Go Back To Main Page
        </button>

    </div>
  )
}
