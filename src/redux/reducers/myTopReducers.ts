import {PayloadAction} from "@reduxjs/toolkit";
import {Favorite} from "../../interfaces/redux/favorits";

const myTopReducer = {
    addToMyTop(state: { favorites: Favorite[] }, action: PayloadAction<Favorite>) {
        const {payload} = action
        const updatedTop = state.favorites.map((item: Favorite) => (
            {
                ...item,
                positionInTop: (item.positionInTop >= payload.positionInTop) ? item.positionInTop + 1 : item.positionInTop
            }))
        state.favorites = [...updatedTop, payload]
    },
    removeFromMyTop(state: { favorites: Favorite[] }, action: PayloadAction<number>) {
        const targetFilm = state.favorites.find((item: Favorite) => item.filmInfo.filmId === action.payload)
        const positionInTop = targetFilm?.positionInTop
        if (positionInTop) {
            const filteredArray = state.favorites.filter((item: Favorite) => item.positionInTop !== positionInTop)
            state.favorites = filteredArray.map((item: Favorite) => (
                {
                    ...item,
                    positionInTop: (item.positionInTop >= positionInTop) ? item.positionInTop - 1 : item.positionInTop
                }))
        }
    },
    setNewOrder(state: { favorites: Favorite[] }, action: PayloadAction<Favorite[]>) {
        state.favorites = action.payload
    }
}

export default myTopReducer