import React from "react";

import { Text, IconButton, Flex } from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="hero">
       <IconButton 
        isRound={true}
        variant='solid'
        colorScheme='orange'
        aria-label='Done'
        fontSize='20px'
        size='lg' 
        icon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        m={6}
        />
      <Flex className="heroheading" direction={"column"} p={40}>
      <h1>Nigerian cooking </h1>
      <Text fontSize="2xl">Recipes of authentic food from Nigeria</Text></Flex>
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
