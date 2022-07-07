import React from "react";
import {
    Dimensions,
    ImageBackground, Pressable,
    Text,
    View
} from "react-native";
import {Film} from "../../../interfaces/redux/films";
import {LinearGradient} from "expo-linear-gradient";
import {cardStyles} from "../../../styles/components/atoms/MovieCard";
import {Styles} from "../../../constans/styles/Styles";

interface MovieCardProps {
    film: Film,
    navigateToDetailsPage: (film: Film) => void
}

const MovieCard = ({film, navigateToDetailsPage}: MovieCardProps) => {
    const {width: windowWidth} = Dimensions.get('window')
    const height = windowWidth * (9 / 16)
    return (
        <View style={{width: '100%', height: height, marginHorizontal: 5}}>
            <Pressable onPress={() => navigateToDetailsPage(film)}>
                <ImageBackground source={{uri: film.posterUrl}} style={cardStyles.cardWrapper}>
                    <LinearGradient colors={['transparent', Styles.BACKGROUND]} style={cardStyles.contentWrapper}>
                        <View style={cardStyles.opacityContainer}/>
                    </LinearGradient>
                    <View style={cardStyles.textWrapper}>
                        <Text style={cardStyles.titleText}>{film.nameRu || film.nameEn}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default MovieCard