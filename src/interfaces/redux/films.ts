export interface Film {
    "filmId": number,
    "nameRu": string,
    "nameEn": string|null,
    "year": string,
    "filmLength": string,
    "countries": Country[],
    "genres": Genre[],
    "rating": string,
    "ratingVoteCount": string,
    "posterUrl": string,
    "posterUrlPreview": string,
    "ratingChange": number|null
}

interface Country {
    country: string
}

interface Genre {
    "genre": string
}

export interface FilmsStore {
    films: Film[],
    isLoad: boolean,
    errorText: string
}