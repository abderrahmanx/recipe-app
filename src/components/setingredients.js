import React from 'react'
import '../css/edit.css'
export default function Setingredients({ingredient,ingredientname,ingredientamount,handleingredientedit,deleteingredient}) {
  
  function changeingredient(change)
  {
    handleingredientedit({...ingredient,...change},ingredient.id)
  }
  
  return (
    <>
    <div className='ingredients1' >
       
    <div className='ingredients-info'>
        
    <label>Name</label>
    <input value={ingredient.name}
    onInput={e=>changeingredient({name:e.target.value})}
    ></input>
    
    </div>
    <div className='ingredients-info'>
    <label >Amount</label>
    <input value={ingredient.amount}
     onInput={e=>changeingredient({amount:e.target.value})}
    ></input>
   
    </div>
    
    <div className='ing-del'>
        <label></label>
    <button
    onClick={()=>deleteingredient(ingredient.id)}
    >&times;</button>
    
    </div>
    
    </div>
  
    </>
  )
}
