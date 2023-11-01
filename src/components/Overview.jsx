import { useEffect, useState } from "react";
import useContentful from "../hooks/useContentful";
import { Spinner, SimpleGrid, Input, Heading, InputGroup, InputLeftElement, Select, Flex, Spacer, Box, Text  } from "@chakra-ui/react";

import { Search2Icon} from '@chakra-ui/icons'
import RecipeCard from "./RecipeCard";
import { Routes, Route, NavLink } from "react-router-dom";

// create recipeCard component ✅
// create useContentful hook ✅
// show recipeCard with data from contentful on page

const Overview = () => {
  const { getData } = useContentful(); // using the function which we have created in the hook
  const [recipes, setRecipes] = useState(null); // setting up an empty useState for our recipe array
  const [search, setSearch] = useState(""); // use state which will be used for the search phrase

  useEffect(() => {
    getData()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(recipes);

  const handleChange = (event) => {
    setSearch(event.target.value) 
    console.log(search)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(search)
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
      setSearch("")
  }

  return (
    <>
    <Flex mt={7}>
    <Box><Heading as='h2' size='xl'>Recipes</Heading></Box>
    <Spacer />
    <Box><form onSubmit={handleSubmit}><InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Search2Icon color='gray.300' />
        </InputLeftElement>
        
        <Input variant='filled' type='tel' placeholder='Search recipes' value={search}
        onChange={handleChange}/>
        
     </InputGroup></form></Box>
     <Spacer />
     <Box><Select variant='filled' placeholder='Filled' >
        <option value='option1'>Option 1</option>
       <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select></Box>
    </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        p={7}
      >
        {!recipes ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            className="spinner"
          />
        ) : (recipes.length === 0 ? <Text>No Results found</Text> :
          recipes.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })
        )}
      </SimpleGrid>
    </>
  );
}

export default Overview;