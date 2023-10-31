import React from "react";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Text, Image, Button, Collapse } from '@chakra-ui/react'


const RecipeCard = ({recipe}) => {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)

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
      <Collapse startingHeight={67} in={show}>
      {recipe.ingredients}
      </Collapse>
      <Collapse startingHeight={67} in={show}>
      {recipe.description}
      </Collapse>
      <Button size='sm' onClick={handleToggle} mt='1rem'>
        Read {show ? 'Less' : 'More'}
      </Button>
    </Stack>
  </CardBody>
</Card>)

}

export default RecipeCard;