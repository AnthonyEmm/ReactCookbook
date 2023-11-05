import { NavLink } from "react-router-dom";
import {  Button  } from "@chakra-ui/react";


export default function WelcomePage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <NavLink to={"recipes"}>Explore More</NavLink>
    </div>
  );
}
