import React from 'react'
import Ingridiant from './Ingridiant'

export default function Recipies({id,name,cookingtime,servings,instructions,ingredients,deleterecipe,editrecipe}) {
  const style={
    opacity: 1
  }

  return (
    <div className='wrraper'>
      <div className='head'>
<div className='header'>
    <h3>{name}</h3>
</div>
<div className='buttons' >
    <button className='edit'  onClick={()=>editrecipe(id)}>edit</button>
    <button className='delete' onClick={()=>deleterecipe(id)}>delete</button>
</div>
</div>
<div className='description'>
<div >
    <span>coocking time:</span>
    <span className='cookingtime'>{cookingtime}</span>
</div>
<div >
    <span>servings:</span>
    <span className='servings'>{servings}</span>
</div>
<div className='instructions'>
    <span>instruction:</span>
   <div>
{instructions}
   </div>
</div>
<div className='ingredients'>
  <span style={style} >ingrediants:</span>
  <div>
  {
      ingredients.map(ing=>{
        return <div><Ingridiant key={ing.id} {...ing}/></div>
      })
  }  
  </div>
</div>
</div>
    </div>
  )
}
