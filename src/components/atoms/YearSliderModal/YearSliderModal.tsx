import React, {useState} from "react";
import {Modal, StyleSheet, Text, View} from "react-native";
import Cross from "react-native-vector-icons/Entypo";
import {BlocksStyles, screenStyles} from "../../../styles/screens";
import {Styles} from "../../../constans/styles/Styles";
import Slider from "@react-native-community/slider";

interface SubModalProps {
    title: string,
    isOpen: boolean,
    closeModal: () => void,
    range: {
        maxYear: number,
        minYear: number
    },
    onPressToOptions: (value: number) => void
}

const YearSliderModal = (
    {
        isOpen,
        closeModal,
        range,
        onPressToOptions
    }: SubModalProps) => {
    const [year, setYear] = useState<number>(range.maxYear)

    const onChangeYear = (value: number) => {
        setYear(value)
        onPressToOptions(value)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginVertical: 10
                    }}>
                        <Text style={BlocksStyles.blockTitle}>Года:</Text>
                        <Cross
                            name={'cross'}
                            color={Styles.ICONS}
                            size={24}
                            onPress={closeModal}/>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={[screenStyles.text]}>{year}</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={[screenStyles.text]}>{range.minYear}</Text>
                        <Slider
                            style={{width: '80%', height: 40}}
                            minimumValue={range.minYear}
                            maximumValue={range.maxYear}
                            value={year}
                            step={1}
                            onValueChange={onChangeYear}
                            minimumTrackTintColor={Styles.TEXT}
                            maximumTrackTintColor={Styles.BUTTONS}
                        />
                        <Text style={[screenStyles.text]}>{range.maxYear}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0, 0.7)',
    },
    modalView: {
        backgroundColor: Styles.BLOCK_COLOR,
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: '100%',
        elevation: 5,
        padding: 15
    },
    filterDirection: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 15
    }
})

export default YearSliderModal