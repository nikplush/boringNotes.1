import {createSlice} from "@reduxjs/toolkit"
import myTopReducer from "../reducers/myTopReducers";

const myTopSlice = createSlice({
    name: "films",
    initialState: {
        favorites: [],
    },
    reducers: myTopReducer,
})

export const { addToMyTop, removeFromMyTop, setNewOrder } = myTopSlice.actions

export default myTopSlice.reducer


