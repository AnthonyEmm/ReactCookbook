import { createClient } from "contentful";

export default function useContentfulSingle() {
 // create the client using the space and access token ✅
 const client = createClient(
    { 
        space: '8fkfh7aut4xt',
        accessToken: 'w5hqQCzfv_RvK7Ez9fJbgXPhLA9GdACpaUYITWBJcHg',
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


        return {title, description, image, ingredients}
    
 
    
 }
 // catch part for if it fails
catch(error) { console.log(error)}
 }


return {getRecipe}

}