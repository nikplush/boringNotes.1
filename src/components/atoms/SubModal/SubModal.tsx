import React from "react";
import {FlatList, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import Cross from "react-native-vector-icons/Entypo";
import Dot from "react-native-vector-icons/Octicons";
import {BlocksStyles, screenStyles} from "../../../styles/screens";
import {Styles} from "../../../constans/styles/Styles";

interface SubModalProps {
    title: string,
    isOpen: boolean,
    closeModal: () => void,
    options: string[],
    onPressToOptions: (value: string) => void
    selected: string | number
}

const SubModal = (
    {
        title,
        isOpen,
        closeModal,
        options,
        onPressToOptions,
        selected
    }: SubModalProps) => {
    const cleanedOptions = [...new Set(options)]

    const onPressToSelectedOption = (value: string) => {
        onPressToOptions(value)
        closeModal()
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
                        <Text style={BlocksStyles.blockTitle}>{title}:</Text>
                        <Cross
                            name={'cross'}
                            color={Styles.ICONS}
                            size={24}
                            onPress={closeModal}/>
                    </View>
                    <FlatList
                        style={{maxHeight: 400}}
                        data={cleanedOptions}
                        ListHeaderComponent={() =>
                            <Pressable style={styles.filterDirection} onPress={() => onPressToSelectedOption('')}>
                                    <Dot name={selected === '' ? 'dot-fill' : 'dot'} color={Styles.ICONS} size={24}/>
                                    <Text style={[screenStyles.text]}>Все</Text>
                            </Pressable>
                        }
                        renderItem={({item}) =>
                            <Pressable style={styles.filterDirection} onPress={() => onPressToSelectedOption(item)}>
                                <Dot name={selected === item ? 'dot-fill' : 'dot'} color={Styles.ICONS} size={24}/>
                                <Text style={[screenStyles.text]}>{item}</Text>
                            </Pressable>
                        }/>
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
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingVertical: 15
    }
})

export default SubModal