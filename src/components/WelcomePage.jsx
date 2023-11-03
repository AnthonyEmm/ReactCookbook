import { NavLink } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="showcase">
      <h1>Nigerian Cooking</h1>
      <img src="./images/Nigeria-flag-bg.png" />
      <p>
        Welcome! <br /> We showcase a variety of Nigerian delicacy recipes
      </p>
      <NavLink to={"recipes"} className="w-btn">
        Explore More
      </NavLink>
    </div>
  );
}
