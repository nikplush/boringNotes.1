import React from "react";
import {View, ImageBackground, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import {Film} from "../../../interfaces/redux/films";
import {carouselItemStyle} from "../../../styles/components/atoms/CarouselItem";
import {Styles} from "../../../constans/styles/Styles";

const CarouselRenderItem = ({item}: {item: Film}) => {
    const genres = item?.genres?.map((genreObj) => genreObj.genre).join('/')
    return (
        <View>
            <ImageBackground source={{uri: item.posterUrl}} style={carouselItemStyle.imgBackground} >
                <LinearGradient colors={['transparent', Styles.BACKGROUND]} style={carouselItemStyle.contentWrapper}>
                    <View style={carouselItemStyle.opacityContainer}/>
                </LinearGradient>
                <View style={carouselItemStyle.textWrapper}>
                    <Text style={carouselItemStyle.titleText}>{item.nameEn || item.nameRu}</Text>
                    <View>
                        <Text style={carouselItemStyle.genreText}>{genres}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default CarouselRenderItem