import { createClient } from "contentful";

export default function useContentful() {
 // create the client using the space and access token ✅
 const client = createClient(
    { 
        space: '8fkfh7aut4xt',
        accessToken: 'w5hqQCzfv_RvK7Ez9fJbgXPhLA9GdACpaUYITWBJcHg',
        host: 'preview.contentful.com'
    }
 )

 // get the data using the contenttype 
 const getData = async () =>{
 // try part for if it is successfull
 try{
    const recipes = await client.getEntries(
        {
            content_type: "recipe", 
            select: "fields"
        }
    ); 
    console.log(recipes)
    
    const sanitizedRecipes = recipes.items.map((recipe)=>{
        const title = recipe.fields.recipetitle
        const description = recipe.fields.description
        const image = recipe.fields.image.fields.file.url
        const id = recipe.sys.id
        const ingredients = recipe.fields.ingredientstext
        // figure out what to do with the ingredients

        return {title, description, image, id, ingredients}
    }

    )


    return sanitizedRecipes; // having to return the content otherwise the data in apps will be undefined
 }
 // catch part for if it fails
catch(error) { console.log(error)}
 }


 // clean up the data 

 //return the function

return {getData}

}