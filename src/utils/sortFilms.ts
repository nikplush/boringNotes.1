import {Film} from "../interfaces/redux/films";

enum SORT_METHODS {
    A_Z,
    RATE,
    YEAR
}

export const sortFilmsBySortMethod = (films: Film[], method?: number) => {
    switch (method) {
        case(SORT_METHODS.A_Z):
            return sortFilmsByAlphabet(films)
        case(SORT_METHODS.RATE):
            return sortFilmsByRating(films)
        case(SORT_METHODS.YEAR):
            return sortFilmsByYear(films)
        default: {
            return films
        }
    }
}

const sortFilmsByAlphabet = (films: Film[]) => {
    return films.sort((a, b) => a.nameRu.localeCompare(b.nameRu))
}

const sortFilmsByRating = (films: Film[]) => {
    return films.sort((a, b) => Number(b.rating) - Number(a.rating))
}
const sortFilmsByYear = (films: Film[]) => {
    return films.sort((a, b) => Number(b.year) - Number(a.year))
}