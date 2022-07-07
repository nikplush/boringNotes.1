import React, {useEffect, useState} from "react";
import {NavigationProp, ParamListBase} from "@react-navigation/native";
import {View} from "react-native";
import MovieTile from "../../molecules/MovieTile/MovieTile";
import {Film} from "../../../interfaces/redux/films";
import {Styles} from "../../../constans/styles/Styles";
import ScreenWrapper from "../../molecules/ScreenWrapper/ScreenWrapper";
import {getPopulateFilms} from "../../../utils/callToAPI";
import {fetchingToasters} from "../../../utils/toastersMessges";

interface MainScreenProp {
    navigation: NavigationProp<ParamListBase>
}

const MainScreen = ({navigation}: MainScreenProp) => {
    const [page, setPage] = useState(1)
    const [films, setFilms] = useState<Film[]>([])

    const getPopulateFilmFromApi = async () => {
        try {
            const populatedFilms = (await getPopulateFilms()).data.films
            setFilms(populatedFilms)
        } catch (e) {
            fetchingToasters()
        }
    }

    useEffect(() => {
        getPopulateFilmFromApi()
    }, [])

    const navigateToDetailsPage = (film: Film) => {
        navigation.navigate('Details', {film})
    }

    const fetchNewFilms = async () => {
        const newFilms = (await getPopulateFilms(page + 1)).data.films
        setFilms(prevState => [...prevState, ...newFilms])
        setPage((page) => page + 1)
    }


    return (
        <ScreenWrapper isScrolling={false}>
            <View style={{backgroundColor: Styles.BACKGROUND}}>
                {!!films.length &&
                <MovieTile
                    films={films}
                    navigateToDetailsPage={navigateToDetailsPage}
                    fetchNewFilms={fetchNewFilms}
                />
                }
            </View>
        </ScreenWrapper>
    );
}

export default MainScreen