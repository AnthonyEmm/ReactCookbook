import React from "react";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Text, Image, Button, Collapse } from '@chakra-ui/react'
import { Link } from "react-router-dom";


const RecipeCard = ({recipe}) => {
    const [show, setShow] = useState(false)



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
      <Link to={`/recipes/${recipe.id}`}>
        <Text>{recipe.shortdescription}</Text>
        <Button size='sm' mt='1rem'>
          Cook me
        </Button>
      </Link>
    </Stack>
  </CardBody>
</Card>)

}

export default RecipeCard;