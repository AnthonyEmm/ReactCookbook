import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Overview from "./components/Overview";
import Form from "./components/Form";
import WelcomePage from "./components/WelcomePage";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";



// create recipeCard component ✅
// create useContentful hook ✅
// show recipeCard with data from contentful on page ✅
// create routing for the recipe overview and recipe detail pages

function App() {
  return (
    <>
      
     
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="recipes" element={<div>
          <Header /><Outlet/>
          </div>}> 
          <Route path="" element={<Overview />} />
          <Route path=":someId" element={<Recipes />} />
        </Route>
        <Route path="/create" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
