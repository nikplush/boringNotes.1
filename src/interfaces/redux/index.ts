import {Film} from "./films";
import {Favorite} from "./favorits";

export interface Store {
    myTop: { favorites: Favorite[]},
    viewed: { viewed:  Film[] }
}