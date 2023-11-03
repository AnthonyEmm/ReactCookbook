import { useEffect, useState } from "react";
import useContentfulSingle from "../hooks/useContentfulSingle";
import { Spinner, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React from "react";
import GoBack from "./GoBack";

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

  console.log(recipe);

  return (
    recipe && (
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
            <p className="card-text">{recipe.shortdescription}</p>
          </div>
          <div className="details">
            <h1>Ingredients & Instruction</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.description}</p>
          </div>
          <div className="details">
  
            <ol>
              <li>this is a test</li>
              {recipe.ingredientlist?.map( (ingredient) => {
               return <li>{ingredient}</li>
              } )}
            </ol>
          </div>
        </div>
      </div>
    )
  );
};

export default Recipes;
