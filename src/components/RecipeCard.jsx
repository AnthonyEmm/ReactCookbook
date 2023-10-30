import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Text, Image } from '@chakra-ui/react'

const RecipeCard = ({recipe}) => {
    return(
<Card maxW='sm'>
  <CardBody>
    <Image
      src={recipe.image}
      alt={recipe.title}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{recipe.title}</Heading>
      <Text>
      {recipe.description}
      </Text>
    </Stack>
  </CardBody>
</Card>)

}

export default RecipeCard;