import { useEffect, useState } from "react";
import useContentful from "./hooks/useContentful";
import "./App.css";
import Header from "./components/Header";
import { Spinner, SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "./components/RecipeCard";
import Recipes from "./components/Recipes";
import Overview from "./components/Overview";
import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoBack from "./components/GoBack";

// create recipeCard component ✅
// create useContentful hook ✅
// show recipeCard with data from contentful on page ✅
// create routing for the recipe overview and recipe detail pages

function App() {
  return (
    <>
      <Header />

      <h1>Recipes</h1>

      <Routes>
        <Route path="/" element={<h1>Recipes Loading..</h1>} />
        <Route path="/recipes" element={<Overview />} />
        <Route path="/recipes/:someId" element={<Recipes />} />
      </Routes>
      <GoBack />
    </>
  );
}

export default App;
