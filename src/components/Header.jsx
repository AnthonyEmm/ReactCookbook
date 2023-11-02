import React from "react";

import { Text, IconButton } from "@chakra-ui/react";
import { AddIcon} from '@chakra-ui/icons'

export default function Header() {
  return (
    <div className="hero">
      <h1>Nigerian cooking </h1>
      <Text fontSize="2xl">Recipes of authentic food from Nigeria</Text>
      {/* <IconButton this is for test purposes please leave it here but ignore it
  isRound={true}
  variant='solid'
  colorScheme='orange'
  aria-label='Done'
  fontSize='20px'
  size='lg'
  
  icon={<AddIcon />}
/> */}
    </div>
  );
}
