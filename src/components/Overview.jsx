import { useEffect, useState } from "react";
import useContentful from "../hooks/useContentful";
import { Spinner, SimpleGrid, Input, Heading, InputGroup, InputLeftElement, Select, Flex, Spacer, Box, Text, Grid, GridItem, Button  } from "@chakra-ui/react";


import RecipeCard from "./RecipeCard";
import { Routes, Route, NavLink } from "react-router-dom";


// IMPORTIN ICONS
import { Search2Icon} from '@chakra-ui/icons'
import { FaBowlRice, FaCarrot, FaDrumstickBite, FaFishFins, FaHippo } from "react-icons/fa6";


// create recipeCard component ✅
// create useContentful hook ✅
// show recipeCard with data from contentful on page ✅

const Overview = () => {
  const { getData } = useContentful(); // using the function which we have created in the hook
  const [recipes, setRecipes] = useState(null); // setting up an empty useState for our recipe array
  const [search, setSearch] = useState(""); // use state which will be used for the search phrase
  const [tag, setTag] =  useState(""); // this use state helps us saving the different tags to filter from them from the api

  useEffect(() => { // this runs the very first time the page is access and contains all the entries from the api without any queries
    getData()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(recipes);

  const handleChange = (event) => { // this changes the search state to the input in the search bar
    setSearch(event.target.value) 
  }

  const handleSubmit = (event) => { // when user presses enter, the page is prevented from reloading and then the data from the api is fetched using our get data function
    event.preventDefault();
    getData(search)
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
      setSearch("") // after the search is executed the input is reset by giving it an empty string
  }

  const handleTagClick = (event) => {
    console.log(event.target.value) 
    setTag(event.target.value); 
    getData(search, tag).then((data) => {
      setRecipes(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>

<Grid
  templateAreas={`"search search"
                  "tabs main"`}
  // gridTemplateRows={'50px 1fr'}
  gridTemplateColumns={'1fr 5fr'}
  rowGap='4'

>
  <GridItem area={'search'}>
  <Flex mt={7}> 
    <Box><Heading as='h2' size='xl'>Recipes</Heading></Box>
    <Spacer />
    <Box w={500}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
              <Search2Icon color='gray.300' />
          </InputLeftElement>
          <Input variant='filled' type='tel' placeholder='Search recipes' value={search}
            onChange={handleChange}/>
        </InputGroup>
     </form>
     </Box>
     <Spacer />
     {/* <Box><Select variant='filled' placeholder='Sort by: Newest' >
        <option value='option1'>Option 1</option>
       <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select></Box> */}
    </Flex>
  </GridItem>
  <GridItem area={'tabs'}>
      <Flex direction={"column"} align={"start"} gap={"3"}>
      <Button leftIcon={<FaBowlRice />} colorScheme='gray' variant='outline' size='lg' value={"rice"}  onClick={handleTagClick}>
        Rice
      </Button>
    <Button leftIcon={<FaCarrot />} colorScheme='gray' variant='outline' size='lg' value={"veggy"} onClick={handleTagClick}>
        Vegetarian
      </Button>
      <Button leftIcon={<FaDrumstickBite />} colorScheme='gray' variant='outline' size='lg' value={"chicken"} onClick={handleTagClick}>
        Chicken
      </Button>
      <Button leftIcon={<FaFishFins />} colorScheme='gray' variant='outline' size='lg' value={"fish"} onClick={handleTagClick}>
        Fish
      </Button>
      <Button leftIcon={<FaHippo />} colorScheme='gray' variant='outline' size='lg' value={"hippo"} onClick={handleTagClick}>
        Hungry Hippo
      </Button>
    </Flex>

  </GridItem>
  <GridItem area={'main'}>
    <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        
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


    
  </GridItem>
      </Grid>
    </>
  );
}

export default Overview;