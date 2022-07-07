import axios from "axios";
const API = 'https://kinopoiskapiunofficial.tech/api/'

export const getPopulateFilms = (page= 1) => {
    return axios.get(API+`v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`)
}

export const getFactsAboutFilm = (filmId: number) => {
    return axios.get(API + `v2.2/films/${filmId}/facts`)
}

export const getFilmTrailer = (filmId: number) => {
    return axios.get(API + `v2.2/films/${filmId}/videos`)
}

export const getFilmCast = (filmId: number) => {
    return axios.get(API + `/v1/staff?filmId=${filmId}`)
}