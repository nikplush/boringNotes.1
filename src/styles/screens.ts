import {Dimensions, StyleSheet} from "react-native";
import {Styles} from "../constans/styles/Styles";

const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
const buttonSize = windowWidth / 3 - 40

export const screenStyles = StyleSheet.create({
    text: {
        color: Styles.TEXT,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    bold: {
        fontWeight: "bold",
    },
    screenWrapper: {
        position: "relative",
        backgroundColor: Styles.BACKGROUND,
        minHeight: windowHeight-20,
    },
    flexWrapper: {
        margin: 10,
    },
    box: {
        minWidth: 150,
        margin: 10
    },
});

export const BlocksStyles = StyleSheet.create({
    blocksWrapper: {
        width: '100%',
        padding: 10,
        alignItems: "center",
    },
    blockWrapper: {
        padding: 25,
        width: '100%',
        backgroundColor: Styles.BLOCK_COLOR,
        borderRadius: 20,
        marginHorizontal: 15,
        marginBottom: 15
    },
    blockTitle: {
        marginBottom: 12,
        fontWeight: 'bold',
        color: Styles.TEXT,
        fontSize: 23,
    },
    blockContentWrapper: {
        flexDirection: "row",
        marginVertical: 5,
    },
    blockContent: {
        color: Styles.TEXT,
        width: '95%'
    },
});


export const CustomButtonStyles = StyleSheet.create({
    buttonContainer: {
        position: "relative",
        backgroundColor: Styles.BLOCK_COLOR,
        width: buttonSize,
        height: buttonSize,
        borderRadius: (buttonSize / 2) - 20,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    buttonsContainer: {
        justifyContent: "center",
        marginVertical: 10,
        flexDirection: "row"
    }
});