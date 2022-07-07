import {AnyAction, combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import myTopReducer from "./slices/myTopSlice";
import viewedReducer from "./slices/viewedSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {State} from "react-native-gesture-handler";

const rootReducer = combineReducers({
    myTop: myTopReducer,
    viewed: viewedReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['films']
}

export type AppDispatch = ThunkDispatch<State, any, AnyAction>;

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store)

export default store