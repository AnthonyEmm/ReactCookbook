import { useEffect, useState } from 'react'
import useContentful from './hooks/useContentful'
import './App.css'
import Header from './components/Header';
import { Spinner, SimpleGrid } from '@chakra-ui/react'
import RecipeCard from './components/RecipeCard';


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
    <Header />
    <h2>Recipes</h2>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
      {!recipes ? <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
          />:  

      recipes.map((recipe) => {
        return (<RecipeCard key={recipe.id} recipe={recipe}/> )
      })

      }
     </SimpleGrid>

    </>
  )
}

export default App
