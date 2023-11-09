import { createClient } from "contentful";

export default function useContentfulSingle() {
 // create the client using the space and access token ✅
 const client = createClient(
    { 
        space: '8fkfh7aut4xt',
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS,
        host: 'preview.contentful.com'
    }
 )

 // get the data using the contenttype 
 const getRecipe = async (id) =>{
 // try part for if it is successfull
 try{
  const recipe = await client.getEntry(id)
    console.log(recipe)

    
        const title = recipe.fields.recipetitle
        const description = recipe.fields.description
        const image = recipe.fields.image.fields.file.url
        const ingredients = recipe.fields.ingredientstext
        const shortdescription = recipe.fields.shortDescription 
        const ingredientlist = recipe.fields.test
        const date = recipe.sys.createdAt.split("T")[0].split("-").reverse().join(".")
        const tags = recipe.metadata.tags

        // implement a date from sys.createdAt 


        return {title, description, image, ingredients, shortdescription, ingredientlist, date, tags}
    
 
    
 }
 // catch part for if it fails
catch(error) { console.log(error)}
 }


return {getRecipe}

}