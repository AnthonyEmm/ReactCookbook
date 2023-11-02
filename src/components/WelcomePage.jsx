import {  NavLink } from "react-router-dom";


export default function WelcomePage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <NavLink to={"recipes"}>Explore More</NavLink>
    </div>
  );
}