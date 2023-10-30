import { useEffect, useState } from 'react'
import useContentful from './hooks/useContentful'
import './App.css'

// create recipeCard component 
// create useContentful hook ✅
// show recipeCard with data from contentful on page


function App() {
  const {getData} = useContentful(); // using the function which we have created in the hook
  const [recipes, setRecipes] = useState(null); // setting up an empty useState for our recipe array

useEffect(()=>{
  getData().then((data) =>{
    setRecipes(data)
  }
  ).catch((error)=>{console.log(error)})
}, [])

console.log(recipes)

  return (
    <>
{!recipes ? <p>let's cook something together</p>: recipes.map((item) => {
  return (
// create recipe Card component styling with bootstrap

  <div key={item.id}>
    <h2>{item.title}</h2>
    <img src={item.image} alt={item.title} />
    <p>{item.description}</p>
    </div>
  )
}

)}
    </>
  )
}

export default App
