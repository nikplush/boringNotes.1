import React, {useEffect, useRef, useState} from "react";
import {Animated, Dimensions, StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Styles} from "../../../constans/styles/Styles";
import Icon from "react-native-vector-icons/Entypo";
import MenuButton from "../../atoms/MenuButton/MenuButton";

enum PagesNames {
    HOME = 'Main',
    MY_TOP = 'MyTop',
    VIEWED = 'Viewed'
}

const Header = () => {
    const {height: windowHeight} = Dimensions.get('window')
    const navigation = useNavigation();
    const menuAnimation = useRef(new Animated.Value(0)).current
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuOpacity = menuAnimation.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1]
    })

    const menuHeight = menuAnimation.interpolate({
        inputRange: [0, 3],
        outputRange: [0, windowHeight - 50]
    })

    const openMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: 3,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const closeMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    useEffect(() => {
        isMenuOpen ? openMenu() : closeMenu()
    }, [isMenuOpen])

    const redirectToSelectedPage = (nameOfSelectedPage: string) => {
        setIsMenuOpen(false)
        navigation.navigate(nameOfSelectedPage)
    }


    return (
        <View style={{backgroundColor: Styles.BLOCK_COLOR}}>
            <View style={{
                flexDirection: "row",
                backgroundColor: Styles.BLOCK_COLOR,
                paddingVertical: 10,
                alignItems: "center",
                height: 50,
            }}>
                <Icon
                    onPress={() => setIsMenuOpen(prevState => !prevState)}
                    name={isMenuOpen ? 'cross' : 'menu'}
                    color={"#eaeaea"}
                    size={28}
                    style={styles.icon}
                />
                <Text style={{color: "#eaeaea", fontSize: 18}}>
                    Boring Notes
                </Text>
            </View>
            <Animated.View
                style={{
                    width: '100%',
                    height: menuHeight,
                    opacity: menuOpacity,
                    backgroundColor: Styles.BACKGROUND
                }}
            >
                <MenuButton
                    onPress={() => redirectToSelectedPage(PagesNames.HOME)}
                    iconName={'home'}
                    title={'HOME'}
                    routeName={PagesNames.HOME}
                />
                <MenuButton
                    onPress={() => redirectToSelectedPage(PagesNames.MY_TOP)}
                    iconName={'list'}
                    title={'MY TOP'}
                    routeName={PagesNames.MY_TOP}
                />
                <MenuButton
                    onPress={() => redirectToSelectedPage(PagesNames.VIEWED)}
                    iconName={'eye'}
                    title={'VIEWED'}
                    routeName={PagesNames.VIEWED}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 'bold',
            backgroundColor: Styles.BLOCK_COLOR,
            padding: 10,
            elevation: 2,
            marginTop: 5
        },
        text: {
            fontSize: 14,
            color: '#fff',
        },
        icon: {
            marginHorizontal: 5
        }
    }
    )

export default Header