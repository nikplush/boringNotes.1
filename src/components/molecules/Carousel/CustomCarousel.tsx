import {Dimensions} from "react-native";
import React from "react";
import Carousel from 'react-native-reanimated-carousel';

import {Film} from "../../../interfaces/redux/films";
import CarouselRenderItem from "../../atoms/CarouselRenderItem/CarouselRenderItem";

const CustomCarousel = ({films}: { films: Film[] }) => {
    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
    return (
            <Carousel
                autoPlay
                height={windowHeight / 2}
                width={windowWidth}
                data={films}
                renderItem={({item}) => <CarouselRenderItem item={item}/>}
            />
    )
}

export default CustomCarousel