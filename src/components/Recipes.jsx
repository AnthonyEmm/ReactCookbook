import React from "react";

const Recipes = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="./images/Nkwobi.jpg"
          alt="Card Image"
          className="card-image"
        />
        <h2 className="card-title">Nkwobi</h2>
        <p className="card-text">
          Nkwobi is a tantalizing Nigerian delicacy that is celebrated for its
          rich and robust flavors. Nkwobi consists of succulent pieces of cow's
          foot or assorted meats, simmered to tender perfection, then bathed in
          a luscious palm oil-based sauce. The sauce, infused with spices like
          utazi leaves, ground crayfish, and scotch bonnet peppers, imparts a
          fiery, earthy taste. Nkwobi is typically served in small wooden or
          ceramic bowls, accompanied by chilled drinks, making it a beloved
          choice for communal gatherings and celebrations, offering an explosion
          of taste and tradition in every bite.
        </p>
      </div>
      <div className="details">
        <h1>Ingredients & Instructions</h1>
        <p>
          1. Cow's Trotters: The primary protein source, cleaned and boiled
          until tender. <br />
          2. Palm Oil: Used as the base for the sauce, giving the dish its
          characteristic red color. 3. Onions: Sliced and used in the sauce as
          well as for garnish. <br />
          4. Ground Crayfish: Adds a nutty and earthy flavor to the sauce.{" "}
          <br />
          5. Ground Utazi Leaves: Provides a slightly bitter and aromatic
          element to the dish. <br /> 6. Ground Pepper: Usually dried pepper is
          used for some heat. <br /> 7. Seasoning Cubes: Typically, bouillon
          cubes or seasoning powder is used for flavor. <br /> 8. Aromatic
          Spices: Garlic, ginger, nutmeg, and cloves are commonly used. <br />{" "}
          9. Bitterleaf or Scent Leaf: Provides bitterness and aroma to the
          sauce. <br /> 10. Stock or Water: Used to create the sauce's
          consistency. <br /> 11. Salt: To taste.
        </p>
      </div>
    </div>
  );
};

export default Recipes;
