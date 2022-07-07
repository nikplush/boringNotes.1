import {StyleSheet} from "react-native";
import {Styles} from "../../../constans/styles/Styles";

export const carouselItemStyle = StyleSheet.create({
    imgBackground: {
        width: '100%',
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
        fontSize: 38,
        fontWeight: "bold"
    },
    genreText: {
        color: Styles.TEXT,
        fontSize: 14,
    }
});

export const CarouselStyles = (opacity: number) => StyleSheet.create({
    carouselOpacity : {
        opacity,
        zIndex: 2
    }
})