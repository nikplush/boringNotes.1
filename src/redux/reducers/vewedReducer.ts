import {PayloadAction} from "@reduxjs/toolkit";
import {Favorite} from "../../interfaces/redux/favorits";
import {Film} from "../../interfaces/redux/films";

interface ViewedStore {
    viewed: Film[]
}

const viewedReducer = {
    addViewedFilm(state: ViewedStore, action: PayloadAction<Film>) {
        state.viewed = [...state.viewed, action.payload]
    },
    removeViewedFilm(state: ViewedStore, action: PayloadAction<number>) {
        state.viewed = state.viewed.filter(item => item.filmId !== action.payload)
    },
}

export default viewedReducer