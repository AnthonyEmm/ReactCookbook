import { createClient } from "contentful";


export default function postContentful() {
const client = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS,
})
  
  // Create entry
 const postData = client.getSpace('8fkfh7aut4xt')
  .then((space) => space.getEnvironment('master'))
  .then((environment) => environment.createEntryWithId('recipe', '<entry_id>', {
    fields: {
        recipetitle: {
        'en-US': 'Entry title'
      }
    }
  }))
  .then((entry) => console.log(entry))
  .catch(console.error)

  return{postData}
}