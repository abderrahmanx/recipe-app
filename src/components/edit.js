import React from 'react'
import '../css/edit.css'
import Setingredients from './setingredients'


export default function Edit({ editrecipe,recipe,handlerecipeedit,}) {
 

function deleteingredient(id)
{
changerecipe({ingredients:recipe.ingredients.filter(ing=>ing.id!==id)} )

}


 function changerecipe(change){
handlerecipeedit({...recipe,...change},recipe.id)

 }
   function addingredient(){
    const newing=
    
    {
       id:Date.now(),
        name:'',
        amount:''    
    }
  
  
 changerecipe({ingredients:[...recipe.ingredients,newing]})
  
  }
 function handleingredientedit(ingredient,id)
{
const newingredientarr=[...recipe.ingredients]
const index=newingredientarr.findIndex(e=>e.id===id)
newingredientarr[index]=ingredient
changerecipe({ingredients:newingredientarr})
}
 
 
  return (
    
      <>
        <button className='close-edit'
        onClick={()=>editrecipe(undefined)}
        >&times;</button>
      <div className='edit-place'>
    <div className='edit-section'>
       
 
  
<div className='inputs'>
 
<div className='edit-labels'>
    <label className='name'>Name :</label>
    <label className='cooktime'>cook Time :</label>
<label className='serving'>Servings :</label>
  <label className='instructions'>instructions :</label>
<p>Ingredients :</p>
</div>
 <div className='edit-inputs'>
<input 
id='Name'
value={recipe.name}
onInput={e=>changerecipe({name:e.target.value})}
></input>
<input
id='cookingtime'
value={recipe.cookingtime}
onInput={e=>changerecipe({cookingtime:e.target.value})}
></input>
<input
id='servings'
type='number'
value={recipe.servings}
onInput={e=>changerecipe({servings:e.target.value})}

></input>
<textarea
id='instructions'
value={recipe.instructions}
onInput={e=>changerecipe({instructions:e.target.value})}
></textarea>
</div>

    
</div>

    </div>
{recipe.ingredients.map(ing=>{
   return <Setingredients key={ing.id} ingredientname={ing.name}
    ingredientamount={ing.amount}
    ingredient={ing}
    handlerecipeedit={handlerecipeedit}
    changerecipe={changerecipe}
    deleteingredient={deleteingredient}
    handleingredientedit={handleingredientedit}
    />
})}

<div className='add-ing'>
        <button 
        onClick={()=>addingredient()}
        >add ingredient</button>
    </div>
   
</div>
</>
  )
}
