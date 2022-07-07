import {Film} from "../interfaces/redux/films";
import {FilterOptions} from "../components/organisms/screens/ViewedScreen";

export const filterFilmsByFilerOptions = (films: Film[], options: FilterOptions, maxYear: number) => {
    const {country, genre, year} = options
    let filteredFilms = films
    if (country){
        filteredFilms = filterCountry(filteredFilms, country)
    }
    if (genre) {
        filteredFilms = filterGenre(filteredFilms, genre)
    }
    if (maxYear !== year) {
        filteredFilms = filterYear(filteredFilms, year)
    }
    return filteredFilms
}

const filterCountry = (films: Film[], countyName: string) => {
    return films.filter(item => item.countries.some( subItem => subItem.country === countyName))
}

const filterGenre = (films: Film[], genreName: string) => {
    return films.filter(item => item.genres.some( subItem => subItem.genre === genreName))
}

const filterYear = (films: Film[], year: number) => {
    return films.filter(item => Number(item.year) < year)
}