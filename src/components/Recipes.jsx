import { useEffect, useState } from "react";
import useContentfulSingle from "../hooks/useContentfulSingle";
import { useParams } from "react-router-dom";
import React from "react";
import GoBack from "./GoBack";

// IMPORTING COMPONENTNS FROM CHAKRA
import { Tag, TagLabel, Spinner} from "@chakra-ui/react";

//IMPORTING ICONS FROM REACT ICONS
import { FaTags } from "react-icons/fa6";



const Recipes = () => {
  const { getRecipe } = useContentfulSingle(); // using the function which we have created in the hook
  const [recipe, setRecipe] = useState(null); // setting up an empty useState for our recipe
  const { someId } = useParams();

  useEffect(() => {
    getRecipe(someId)
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(recipe?.date);



  return (
    !recipe ? <Spinner size='xl' mt={70} /> // if the content is not loaded from the api yet the user will now see a spinner
    :  (
      <div>
        <GoBack />
        <div className="container">
          <div className="card">
            <img
              src={recipe.image}
              alt={`Picture of ${recipe.title}`}
              className="card-image"
            />
            <h2 className="card-title">{recipe.title}</h2>
            <p className="card-text">Created: {recipe.date}</p>
            <p className="card-text">{recipe.shortdescription}</p>
            {/* this is a mapping method to find each tag and create a small tag with an icon next to it */}
            {recipe?.tags.map((tag) => {
            
              return (
                // because food is only used as a tag for the show all button, it can be ignored here
                tag.sys.id != "food" &&
               <Tag size={'lg'} m={2} variant='subtle' colorScheme="orange">
                  <FaTags/>
                  <TagLabel> {tag.sys.id.toUpperCase()}</TagLabel>
               </Tag>)
            })}
          </div>
          <div className="details">
            <h1>Ingredients & Instruction</h1>
            {/* <p>{recipe.ingredients}</p> */}
            <ul>{/* this is a different approach to the ingredients and takes an array from the api and maps over it to create list items</p> */}
              {recipe.ingredientlist?.map( (ingredient) => {
               return <li key={ingredient+"key"}>{ingredient}</li>
              } )}
            </ul>
            <p>{recipe.description}</p>
          </div>
          <div className="details">
  

          </div>
        </div>
      </div>
    )
  );
};

export default Recipes;
