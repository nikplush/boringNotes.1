import React from "react";
import {Text, View} from "react-native";
import {Film} from "../../../interfaces/redux/films";
import {BlocksStyles, screenStyles} from "../../../styles/screens";

const generateFilmName = (film: Film) => {
    const {nameRu, nameEn} = film
    if (nameRu && nameEn){
        return nameRu + '/' + nameEn
    }
    return nameEn || nameRu
}

const FilmInfoBlock = ({film}: { film: Film }) => {
    return (
        <View style={BlocksStyles.blockWrapper}>
            <Text style={BlocksStyles.blockTitle}>{generateFilmName(film)}</Text>
            <View style={BlocksStyles.blockContentWrapper}>
                <Text style={[screenStyles.text, screenStyles.bold]}>Жанры:</Text>
                <View>
                    {film.genres.map((genreObj) =>
                        <Text style={{color: '#fff'}} key={genreObj.genre}>
                            {genreObj.genre}
                        </Text>
                    )}
                </View>
            </View>
            <View style={BlocksStyles.blockContentWrapper}>
                <Text style={[screenStyles.text, screenStyles.bold]}>Год:</Text>
                <Text style={screenStyles.text} >{film.year}</Text>
            </View>
            <View style={BlocksStyles.blockContentWrapper}>
                <Text style={[screenStyles.text, screenStyles.bold]}>Рейтинг:</Text>
                <Text style={screenStyles.text} >{film.rating}</Text>
            </View>
        </View>
    )
}

export default FilmInfoBlock