import React, {useEffect, useRef} from "react";
import {Animated, Easing, View} from "react-native";
import {CustomButtonStyles} from "../../../styles/screens";
import Icon from "react-native-vector-icons/Feather";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Styles} from "../../../constans/styles/Styles";

interface CustomButtonProps {
    iconName: string,
    onPress: () => void,
    isCrossed?: boolean
}

const CustomButton = ({iconName, onPress, isCrossed = false}: CustomButtonProps) => {
    const lineAnimatedSize = useRef(new Animated.Value(0)).current

    const lineSize = lineAnimatedSize.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50]
    })

    const crossAdd = () => {
        Animated.timing(lineAnimatedSize, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()
    }

    const crossRemove = () => {
        Animated.timing(lineAnimatedSize, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()
    }

    useEffect(() => {
        isCrossed ? crossAdd() : crossRemove()
    }, [isCrossed])

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={CustomButtonStyles.buttonContainer}>
                <Icon name={iconName} color={Styles.ICONS} size={50}/>
                <Animated.View style={{
                    position: "absolute",
                    width: '100%',
                    height: '100%',
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View
                    style={{
                        height: 50,
                        width: 50,
                        justifyContent:"center",
                        alignItems: "flex-start",
                        transform: [{rotate: '135deg'}]
                    }}
                    >
                        <Animated.View
                            style={{
                                backgroundColor: Styles.ICONS,
                                width: lineSize,
                                borderBottomLeftRadius: 5,
                                height: 5,
                            }}
                        />
                    </View>
                </Animated.View>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton