import React from "react";

import { Card, CardBody, Stack,  Image, Skeleton, SkeletonText } from '@chakra-ui/react'
import { Link } from "react-router-dom";


const SkeletonCard = ({recipe}) => {
    return(
<Card maxW='sm'>
  <CardBody>
    <Skeleton  height='200px'/>

    <Stack mt='6' spacing='3'>
    <Skeleton height='20px' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </Stack>
  </CardBody>
</Card>)

}

export default SkeletonCard;