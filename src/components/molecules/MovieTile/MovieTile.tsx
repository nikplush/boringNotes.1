import React, {
    useEffect,
    useRef,
    useState
} from "react";
import {
    Animated,
    Dimensions,
    View
} from "react-native";

import {Styles} from "../../../constans/styles/Styles";
import MovieCard from "../../atoms/MovieCard/MovieCard";
import {Film} from "../../../interfaces/redux/films";
import {screenStyles} from "../../../styles/screens";
import CustomCarousel from "../Carousel/CustomCarousel";

interface MovieTileProps {
    films: Film[],
    navigateToDetailsPage: (film: Film) => void
    fetchNewFilms: () => void
}

const MovieTile = ({films, navigateToDetailsPage, fetchNewFilms}: MovieTileProps) => {
    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
    const nScroll = useRef(new Animated.Value(0)).current;
    const [isEnded, setIsEnded] = useState(false)

    const addedEmptyItems =[films[1],films[1],...films]

    const opacityScroll = nScroll.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const loadNewFilms = () => {
        setIsEnded(true)
    }

    useEffect(() => {
        if (isEnded) {
            fetchNewFilms()
        }
    }, [isEnded])

    useEffect(() => {
        setIsEnded(false)
    }, [films])

    const animatedEvent = Animated.event(
        [{nativeEvent: {contentOffset: {y: nScroll}}}],
        {useNativeDriver: true}
    )

    const renderItem = ({item, index}: { item: Film, index: number }) =>
        index > 1
            ? <View style={screenStyles.box}>
                <MovieCard film={item} navigateToDetailsPage={navigateToDetailsPage}/>
            </View>
            : <View style={{height: windowHeight/2}}/>


    return (
        <View style={{
            height: windowHeight,
            position: "relative",
            backgroundColor: Styles.BACKGROUND
        }}
        >
            <Animated.View style={{
                position: "absolute",
                zIndex: -5,
                opacity: opacityScroll,
                height: windowHeight / 2,
            }}
            >
                <CustomCarousel films={films.slice(0, 5)}/>
            </Animated.View>
            <Animated.View style={{height: windowHeight,}}>
                <Animated.FlatList
                    style={{width: windowWidth}}
                    numColumns={2}
                    scrollEventThrottle={1}
                    contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
                    keyExtractor={(items: any) => items.filmId}
                    onEndReachedThreshold={1}
                    onScroll={animatedEvent}
                    onScrollEndDrag={() => loadNewFilms()}
                    data={addedEmptyItems}
                    renderItem={renderItem}
                />
            </Animated.View>
        </View>
    )
}


export default MovieTile