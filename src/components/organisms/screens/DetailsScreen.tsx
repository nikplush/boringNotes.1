import React, {useEffect, useState} from "react";
import {Dimensions, View} from "react-native";
import CarouselRenderItem from "../../atoms/CarouselRenderItem/CarouselRenderItem";
import {BlocksStyles, CustomButtonStyles} from "../../../styles/screens";
import {getFactsAboutFilm, getFilmCast, getFilmTrailer} from "../../../utils/callToAPI";
import {generateFilmInfo} from "../../../utils/generateFilmsInfo";
import ScreenWrapper from "../../molecules/ScreenWrapper/ScreenWrapper";
import CastBlock from "../../molecules/CastBlock/CastBlock";
import FilmInfoBlock from "../../atoms/FilmInfoBlock/FilmInfo";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CollapsibleBlock from "../../molecules/CollapsibleBlock/CollapsibleBlock";
import {useDispatch, useSelector} from "react-redux";
import {addToMyTop, removeFromMyTop} from "../../../redux/slices/myTopSlice";
import {addViewedFilm, removeViewedFilm} from "../../../redux/slices/viewedSlice";
import VideoBlock from "../../molecules/VideoBlock/VideoPlayer";
// @ts-ignore
import ProgressLoader from 'rn-progress-loader';
import {EventsName, fetchingToasters, showViewedToasters} from "../../../utils/toastersMessges";
import {AppDispatch} from "../../../redux";
import {Styles} from "../../../constans/styles/Styles";
import {Store} from "../../../interfaces/redux";


const DetailsScreen = ({route}: any) => {
    const {film} = route.params
    const myTop = useSelector((state: Store) => state.myTop.favorites)
    const listOfViewed = useSelector((state: Store) => state.viewed.viewed)
    const isInTop = !!myTop.find((item) => item.filmInfo.filmId === film.filmId)
    const isViewed = !!listOfViewed.find((item) => item.filmId === film.filmId)

    const dispatch = useDispatch<AppDispatch>()

    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
    const [filmInfo, setFilmInfo] = useState<any>({})
    const [isLoad, setIsLoad] = useState<boolean>(false)

    const getFilmInfo = async () => {
        try {
            const filmsFacts = (await getFactsAboutFilm(film.filmId)).data
            const filmTrailers = (await getFilmTrailer(film.filmId)).data
            const cast = (await getFilmCast(film.filmId)).data
            const filmInfoFromApi = generateFilmInfo(filmsFacts, filmTrailers, cast)
            setFilmInfo(filmInfoFromApi)
            setIsLoad(true)
        } catch (e) {
            fetchingToasters()
        }
    }

    useEffect(() => {
        getFilmInfo()
    }, [route])

    const pressToListButton = () => {
        if (!isInTop) {
            dispatch(addToMyTop({filmInfo: film, positionInTop: 1}))
            showViewedToasters(EventsName.ADD)
        } else {
            dispatch(removeFromMyTop(film.filmId))
            showViewedToasters(EventsName.REMOVE)
        }
    }

    const onPressToViewed = () => {
        if (isViewed) {
            dispatch(removeViewedFilm(film.filmId))
            showViewedToasters(EventsName.REMOVE)
        } else {
            dispatch(addViewedFilm(film))
            showViewedToasters(EventsName.ADD)
        }
    }

    return (
        <ScreenWrapper>
            <View style={{height: windowHeight / 2, width: windowWidth}}>
                <CarouselRenderItem item={film}/>
            </View>
            {(isLoad) &&
            <View>
                <View style={CustomButtonStyles.buttonsContainer}>
                    <CustomButton iconName={'eye'} isCrossed={isViewed} onPress={onPressToViewed}/>
                    <CustomButton iconName={'list'} isCrossed={isInTop} onPress={pressToListButton}/>
                </View>
                <View style={BlocksStyles.blocksWrapper}>
                    <FilmInfoBlock film={film}/>
                    {!!(filmInfo.facts.length) && <CollapsibleBlock data={filmInfo.facts} title={'Факты'}/>}
                    {!!(filmInfo.trailerId) && <VideoBlock videoId={filmInfo.trailerId}/>}
                    {(filmInfo.cast) && <CastBlock cast={filmInfo.cast}/>}
                </View>
            </View>
            }
            <ProgressLoader
                visible={!isLoad}
                isHUD={true}
                hudColor={"#000000"}
                color={Styles.TEXT}
            />
        </ScreenWrapper>
    )
}

export default DetailsScreen