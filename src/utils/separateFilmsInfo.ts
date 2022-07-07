import {Film} from "../interfaces/redux/films";

const getCountries = (films: Film[]) => {
    const countries: string[] = []
    films.forEach(item => {
        item.countries.forEach(subItem => {
            countries.push(subItem.country)
        })
    })
    return countries
}

const getGenres = (films: Film[]) => {
    const countries: string[] = []
    films.forEach(item => {
        item.genres.forEach(subItem => {
            countries.push(subItem.genre)
        })
    })
    return countries
}

const getPeriod = (films: Film[]) => {
    const years = films.map(item => Number(item.year))
    const maxYear = Math.max(...years)
    const minYear = Math.min(...years)
    return {maxYear,minYear}
}

export const separatorFilmInfo = (films: Film[]) => {
    const countries = getCountries(films)
    const genres = getGenres(films)
    const period = getPeriod(films)
    return {countries, genres, period}
}