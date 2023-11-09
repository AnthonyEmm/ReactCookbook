import { createClient } from "contentful";

export default function useContentful() {
 // create the client using the space and access token ✅
 const client = createClient(
    { 
        space: '8fkfh7aut4xt',
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS,
        host: 'preview.contentful.com'
    }
 )

 // get the data using the contenttype 
 const getData = async (search, tag, skip) =>{ // search is now a parameter which will be givin once the function is called. this makes sure that only certain entries gets shown
 // try part for if it is successfull
 try{
    const recipes = await client.getEntries(
        {
            content_type: "recipe", 
            select: "fields",
            query: search, 
            'metadata.tags.sys.id[in]': tag, 
            limit: 3,
            skip: skip, 
            order: "sys.createdAt"
        }
    ); 
    console.log(recipes)
    
    const sanitizedRecipes = recipes.items.map((recipe)=>{
        const title = recipe.fields.recipetitle
        const description = recipe.fields.description
        const shortdescription = recipe.fields.shortDescription
        const image = recipe.fields.image.fields.file.url
        const id = recipe.sys.id
        const ingredients = recipe.fields.ingredientstext
       

        return {title, description, image, id, ingredients, shortdescription}
    } )

    const total = recipes.total // why is this undefined? 

    return {sanitizedRecipes, total}; // having to return the content otherwise the data in apps will be undefined
 }
 // catch part for if it fails
catch(error) { console.log(error)}
 }



return {getData}

}