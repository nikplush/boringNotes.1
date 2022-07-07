import {clearString} from "./clearString";
import {decode} from "html-entities";

interface Trailers {
    total: number
    items: TrailerItems[]
}

interface Facts {
    total: number
    items: FactsItems[]
}

interface FactsItems {
    "text": string,
    "type": string,
    "spoiler": boolean
}

interface TrailerItems {
    "url": string,
    "name": string,
    "site": string
}

interface CastItem {
    "staffId": number,
    "nameRu": string,
    "nameEn": string,
    "description": string | null,
    "posterUrl": string,
    "professionText": string,
    "professionKey": string
}

const cleanFacts = (filmsFacts: Facts) => {
    const {items: facts} = filmsFacts
    return facts.map((item) => clearString(decode((item).text)))
}

const getFilmId = (filmsTrailers: Trailers) => {
    let videoId = ''
    const {items: trailers} = filmsTrailers
    const youTubeTrailer = trailers.find((item) => item.site === "YOUTUBE")
    if (youTubeTrailer) {
        const {url} = youTubeTrailer
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        videoId = (match&&match[7].length==11)? match[7] : '';
    }
    return videoId
}

export const generateFilmInfo = (filmsFacts: Facts, filmsTrailers: Trailers, cast: CastItem[]) => {
    const trailerId = getFilmId(filmsTrailers)
    const facts = cleanFacts(filmsFacts)
    const filteredCast = cast.filter(item => item.professionKey === "ACTOR")
    return {trailerId, facts, cast: filteredCast}
}