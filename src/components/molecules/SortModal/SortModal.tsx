import React from "react";
import {FlatList, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import Cross from "react-native-vector-icons/Entypo";
import {BlocksStyles, screenStyles} from "../../../styles/screens";
import {Styles} from "../../../constans/styles/Styles";

interface SubModalProps {
    isOpen: boolean,
    closeModal: ()=>void,
    options: string[],
    onPressToOptions: (value: number)=>void
}

const SortModal = (
    {
        isOpen,
        closeModal,
        options,
        onPressToOptions
    }: SubModalProps) => {

    const onPressToSelectedOption = (value: number) => {
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
                        <Text style={BlocksStyles.blockTitle}>Варианты сортировки:</Text>
                        <Cross
                            name={'cross'}
                            color={"#eaeaea"}
                            size={24}
                            onPress={closeModal}/>
                    </View>
                    <FlatList
                        style={{maxHeight: 400}}
                        data={options}
                        renderItem={({item, index})=>
                            <Pressable style={styles.filterDirection} onPress={()=>onPressToSelectedOption(index)}>
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
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 15
    }
})

export default SortModal