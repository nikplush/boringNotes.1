import React, {useEffect, useRef, useState} from "react";
import {Animated, Pressable, StyleSheet, View} from "react-native";
import {Styles} from "../../../constans/styles/Styles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface OptionsContainerProps {
    onPressToFilter: () => void
    onPressToSort: () => void
}

const OptionsContainer = ({onPressToFilter, onPressToSort}: OptionsContainerProps) => {
    const containerAnimation = useRef(new Animated.Value(40)).current
    const optionsButtonAnimated = useRef(new Animated.Value(0)).current
    const iconRotate = useRef(new Animated.Value(0)).current
    const [isOpenOptions, setIsOpenOptions] = useState(false)

    const rotateIcon = iconRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg']
    })

    const backgroundAnimation = iconRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['#36274B', Styles.BLOCK_COLOR]
    })

    const scaleButtons = containerAnimation.interpolate({
        inputRange: [0, 400],
        outputRange: ['0%', '100%']
    })

    const openOptions = () => {
        Animated.timing(iconRotate, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start()
        Animated.timing(containerAnimation, {
            toValue: 400,
            duration: 100,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(optionsButtonAnimated, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            }).start(() => {
            })
        })
    }

    const closeOptions = () => {
        Animated.timing(iconRotate, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        }).start()
        Animated.timing(optionsButtonAnimated, {
            toValue: 0,
            duration: 50,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(containerAnimation, {
                toValue: 40,
                duration: 100,
                useNativeDriver: false
            }).start(() => {
            })
        })
    }

    useEffect(() => {
        isOpenOptions ? openOptions() : closeOptions()
    }, [isOpenOptions])

    return (
        <View style={{position: "absolute", zIndex: 15, bottom: 30, right: 20}}>
            <Animated.View style={{
                backgroundColor: Styles.BLOCK_COLOR,
                borderRadius: 20,
                flexDirection: "row",
                maxWidth: containerAnimation,
                alignItems: "center",
                justifyContent: "flex-end"
            }}
            >
                <Animated.View style={{opacity: optionsButtonAnimated, flexDirection: "row", maxWidth: scaleButtons}}>
                    <Pressable
                        style={MyTopStyles.settings_button}
                        onPress={onPressToFilter}
                    >
                        <Icon name={'filter-alt'} color={"#eaeaea"} size={24}/>
                    </Pressable>
                    <Pressable
                        onPress={onPressToSort}
                        style={[MyTopStyles.settings_button, {marginHorizontal: 10}]}>
                        <Icon name={'sort'} color={"#eaeaea"} size={24}/>
                    </Pressable>
                </Animated.View>
                <Pressable
                    onPress={() => setIsOpenOptions(prev => !prev)}
                >
                    <Animated.View
                        style={[
                            MyTopStyles.settings_button,
                            {
                                transform: [{rotate: rotateIcon}],
                                backgroundColor: backgroundAnimation
                            }]}
                    >
                        <Icon name={'settings'} color={"#eaeaea"} size={24}/>
                    </Animated.View>
                </Pressable>
            </Animated.View>
        </View>
    );
}

export default OptionsContainer

export const MyTopStyles = StyleSheet.create({
    item: {
        width: '100%',
        height: 50,
        flexDirection: "row",
        marginVertical: 5,
        alignItems: "center",
        backgroundColor: Styles.BLOCK_COLOR
    },
    position: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 10
    },
    poster: {
        height: 50,
        width: 30,
        marginHorizontal: 10
    },
    settings_button: {
        backgroundColor: '#36274B',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    }
});
