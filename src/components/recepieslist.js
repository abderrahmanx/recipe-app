import React from 'react'
import Recipies from './recipies'
import '../css/app.css'

export default function Recepieslist({recipes,addrecipe,deleterecipe,editrecipe}) {
  return (
      <>
   
{recipes.map(recipe=>{
   return <Recipies key={recipe.key} {...recipe} deleterecipe={deleterecipe}
   editrecipe={editrecipe}
   ></Recipies> 

  }) }

<div className='btn'>
  <button className='add-button'
  onClick={addrecipe}
  
    >Add recipe</button>
</div>


</>
  )
}
