# WBS CODING SCHOOL PROJECT

This project is part of the WBS Coding School Webdevelopment Bootcamp. The goal of the project is:

- learn headless CMS
- practicing creating functions to retrieve data from APIs
- practicing Routing in React

## Project Setup

The application was created using Vite and Bable.
More information:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## UI Library and Icons

### Chakra UI

The project uses [Chakra UI] (https://chakra-ui.com/getting-started) for some of its styling mainly on the Recipe Overview Page and for the Recipe Cards.

### Icons

The icons used in the project are Font Awesome 6 icons from [react icons](https://react-icons.github.io/react-icons/icons?name=fa6).

## Contentful

One part of the project was to setup a new content model on [contentful](https://www.contentful.com/) with different data to retrieve and display on the website.

For fetching the data the useContentful (for all entries) and useContentfulSingle (for only one entrie) hooks were created. After receiving the data they get cleaned up so that it is easier to use them in the other components.

Example:

```
const sanitizedRecipes = recipes.items.map((recipe)=>{
const title = recipe.fields.recipetitle
const description = recipe.fields.description
const shortdescription = recipe.fields.shortDescription
const image = recipe.fields.image.fields.file.url
const id = recipe.sys.id
const ingredients = recipe.fields.ingredientstext

        return {title, description, image, id, ingredients, shortdescription}
    } )

```

This means if a new field in contentful is created it has to be added to the sanitizedRecipes Array to ensure that it can be displayed.

To ensure the search, filter and pagination functions the getData function in the hook takes the following parameters: search, tag, skip.

```

    const recipes = await client.getEntries(
        {
            content_type: "recipe",
            select: "fields",
            query: search,
            'metadata.tags.sys.id[in]': tag,
            limit: 6,
            skip: skip,
            order: "sys.createdAt"
        }
    );

```

## React Router DOM

For routing of the pages [React Router version 6](https://reactrouter.com/en/main) is used.
The project uses nested routing to ensure that navigation between the recipes overview and the recipe details still show the header image.

```
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
```
