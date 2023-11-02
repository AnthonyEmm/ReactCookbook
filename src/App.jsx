
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Overview from "./components/Overview";
import Form from "./components/Form";
import { Routes, Route, NavLink } from "react-router-dom";

// create recipeCard component ✅
// create useContentful hook ✅
// show recipeCard with data from contentful on page ✅
// create routing for the recipe overview and recipe detail pages

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/recipes/:someId" element={<Recipes />} />
        <Route path="/create" element={<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
