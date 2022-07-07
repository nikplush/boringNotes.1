import axios from "axios";
import {Provider} from "react-redux";
import Toast from 'react-native-toast-message';
import {PersistGate} from "redux-persist/integration/react";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import store, {persistor} from "./src/redux";
import Navigation from "./src/navigations";
import {API_KEY} from "./src/constans/api/tokens/api_key";
import firebase from '@react-native-firebase/app';

const App = () => {
    axios.defaults.headers.common['X-API-KEY'] = API_KEY
    firebase.app();

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{flex: 1}}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <Navigation/>
                    </PersistGate>
                </Provider>
            </GestureHandlerRootView>
            <Toast/>
        </SafeAreaProvider>
    )
}

export default App
