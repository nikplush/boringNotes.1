import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {Styles} from "../../../constans/styles/Styles";
import Icon from "react-native-vector-icons/Entypo";


interface MenuButtonProps {
    onPress: () => void
    iconName: string,
    title: string,
    routeName: string
}

const MenuButton = ({onPress, iconName, title, routeName}: MenuButtonProps) => {
    const route = useRoute();

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <View style={{alignItems: "center"}}>
                <Icon
                    name={iconName}
                    color={"#eaeaea"}
                    size={18}
                    style={styles.icon}
                />
                {routeName === route.name &&
                <View style={{width: 18, height: 2, backgroundColor: Styles.BUTTONS}}/>
                }
            </View>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
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
);

export default MenuButton