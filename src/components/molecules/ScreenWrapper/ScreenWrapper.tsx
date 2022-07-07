import React, {ReactNode} from "react";
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView} from "react-native-gesture-handler";
import {screenStyles} from "../../../styles/screens";
import Header from "../../organisms/Header/Header";

interface ScreenWrapper {
    children: ReactNode,
    isScrolling?: boolean
}

const ScreenWrapper = ({children, isScrolling = true}: ScreenWrapper) =>
    <SafeAreaView>
        <Header/>
        {(isScrolling)
            ? (
                <ScrollView style={screenStyles.screenWrapper}>
                    {children}
                </ScrollView>
            )
            : (
                <View style={screenStyles.screenWrapper}>
                    {children}
                </View>
            )
        }
    </SafeAreaView>


export default ScreenWrapper