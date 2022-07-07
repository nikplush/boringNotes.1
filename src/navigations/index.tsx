import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "../components/organisms/screens/MainScreen";
import DetailsScreen from "../components/organisms/screens/DetailsScreen";
import MyTopScreen from "../components/organisms/screens/MyTopScreen";
import ViewedScreen from "../components/organisms/screens/ViewedScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
                <Stack.Screen name="MyTop" component={MyTopScreen}/>
                <Stack.Screen name="Viewed" component={ViewedScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;