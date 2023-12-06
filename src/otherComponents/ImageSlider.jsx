import {Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({images}) => {
  return (
    <Carousel infiniteLoop swipeable width={"100%"} dynamicHeight   >
    {
        images?.map((item)=>{
            return <Image  objectFit={"fill"} src={item}  w={"100%"} height={{base:"155px", md:"317px", lg:"317px", xl:"317px"}} borderRadius={"10px 10px 0px 0px"}  />
        })
    }
</Carousel>
  )
}

export default ImageSlider
