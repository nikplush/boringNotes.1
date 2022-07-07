import {createSlice} from "@reduxjs/toolkit"
import viewedReducer from "../reducers/vewedReducer";

const viewedSlice = createSlice({
    name: "films",
    initialState: {
        viewed: [],
    },
    reducers: viewedReducer,
})

export const {addViewedFilm, removeViewedFilm} = viewedSlice.actions

export default viewedSlice.reducer