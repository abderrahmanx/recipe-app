import React,{useState,useEffect} from 'react'
import Recepieslist from './recepieslist'
import'../css/app.css'
import Edit from './edit'
const localstoragekey="storage1"

function App() {
const [recipes,setrecipes]=useState(Recipeslist)
const[selectedId,setselectedId]=useState()
const selected=recipes.find(recipe=>recipe.id===selectedId)

useEffect(()=>{
  const getitemsfromstorage=localStorage.getItem(localstoragekey)
  if(getitemsfromstorage!=null) setrecipes(JSON.parse(getitemsfromstorage))
  },[])


useEffect(()=>{
localStorage.setItem(localstoragekey,JSON.stringify(recipes))

},[recipes])
console.log(selected)
function editrecipe(id){
setselectedId(id)

}

function handlerecipeedit(recipe,id)
{
const newrecipearr=[...recipes]
const index=newrecipearr.findIndex(e=>e.id===id)
newrecipearr[index]=recipe
setrecipes(newrecipearr)
}


function deleterecipe(id)
{
setrecipes(recipes.filter(recipe=>recipe.id!==id))
}


function addrecipe(){
  const newrecipe=
  
  {
    id:Date.now(),
    name:"New",
    cookingtime:"1:00",
    servings:"1",
    instructions: " "  ,
    ingredients:[
      {
     id:Date.now(),
      name:"New",
      amount:"1TBS"
     }
    ]
  }

setselectedId(newrecipe.id)
setrecipes([...recipes,newrecipe])
console.log(recipes)
}

  return (
    <>
    <div className='main'>
      <div>
    <Recepieslist recipes={recipes}
      addrecipe={addrecipe}
      deleterecipe={deleterecipe}
      editrecipe={editrecipe}
    
      />
</div>
<div className='right-side'>
  {selected && < Edit recipe={selected}
   handlerecipeedit={handlerecipeedit}
   editrecipe={editrecipe}
  />}
   </div>
   </div>
  </>
  )

}
  const Recipeslist=[
    {
id:"1",
name:"chicken breasts",
cookingtime:"1:45",
servings:"3",
instructions: "1.put salt on chiken\n2.put the chicken in the oven\n3.eat the chicken "  ,
ingredients:[
  {
 id:"2",
  name:"salt",
  amount:"1TBS"
 },{
 id:"3",
 name:"pabrika",
 amount:"1/2TBS"
   }
 ]
},
  {
  id:"4",
name:"beaf",
cookingtime:"2:30",
servings:"2",
instructions: "1.put salt on beaf\n2.put the beaf in the oven\n3.eat the beaf "  
,ingredients:[
  {
 id:"5",
  name:"pepper",
  amount:"2TBS"
 },{
 id:"6",
 name:"butter",
 amount:"3TBS"
   }
 ]  
}
]

export default App;