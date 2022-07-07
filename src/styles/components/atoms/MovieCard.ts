import {StyleSheet} from "react-native";
import {Styles} from "../../../constans/styles/Styles";

export const cardStyles = StyleSheet.create({
    cardWrapper: {
        borderRadius: 10,
        height: '100%'
    },
    contentWrapper: {
        height: '100%',
        position: "relative",
        justifyContent: 'flex-end',
    },
    opacityContainer: {
        height: '100%',
        width: '100%',
        opacity: 0.3,
    },
    textWrapper: {
        position: "absolute",
        bottom: 0,
        padding: 10,
        justifyContent: 'center',
    },
    titleText: {
        color: Styles.TEXT,
        fontSize: 18,
        fontWeight: "bold"
    },
});
