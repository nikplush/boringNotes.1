import React, {useState} from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {BlocksStyles, screenStyles} from "../../../styles/screens";
import Cross from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Styles} from "../../../constans/styles/Styles";
import SubModal from "../../atoms/SubModal/SubModal";
import YearSliderModal from "../../atoms/YearSliderModal/YearSliderModal";
import {FilterOptions} from "../../organisms/screens/ViewedScreen";

enum Selectors {
    COUNTRY = 'country',
    GENRE = 'genre',
    YEAR = 'year'
}

interface FilterOptionsModal {
    countries: string[],
    genres: string[],
    period: {
        maxYear: number,
        minYear: number
    }
}

interface FilterModalProps {
    isOpenFilterModal: boolean,
    setIsOpenFilterModal: (isOpenL: boolean) => void,
    options: FilterOptionsModal,
    filterOptions: FilterOptions,
    updateFilterOptions: (options: FilterOptions) => void
}

const FilterModal = (
    {
        isOpenFilterModal,
        setIsOpenFilterModal,
        options,
        updateFilterOptions,
        filterOptions
    }: FilterModalProps) => {
    const [modalSelector, setModalSelector] = useState<string>('')

    const openSelectedModal = (selector: string) => {
        setModalSelector(selector)
    }

    const setNewOption = (key: string) => {
        return (value: string | number) => {
            updateFilterOptions({...filterOptions, [key]: value})
        }
    }

    const closeModal = () => {
        setModalSelector('')
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isOpenFilterModal && !modalSelector}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginVertical: 10
                        }}>
                            <Text style={BlocksStyles.blockTitle}>Фильтры:</Text>
                            <Cross name={'cross'} color={Styles.ICONS} size={24}
                                   onPress={() => setIsOpenFilterModal(false)}/>
                        </View>
                        <View>
                            <Pressable
                                style={styles.filterDirection}
                                onPress={() => openSelectedModal(Selectors.COUNTRY)}
                            >
                                <Text style={[screenStyles.text, screenStyles.bold]}>Страны</Text>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={screenStyles.text}>
                                        {filterOptions.country || 'Все Страны'}
                                    </Text>
                                    <Icon name={'arrow-forward-ios'} size={18} color={Styles.ICONS}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={styles.filterDirection}
                                onPress={() => openSelectedModal(Selectors.GENRE)}
                            >
                                <Text style={[screenStyles.text, screenStyles.bold]}>Жанры</Text>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={[screenStyles.text, {textTransform: "capitalize"}]}>
                                        {filterOptions.genre || 'Все Жанры'}
                                    </Text>
                                    <Icon name={'arrow-forward-ios'} size={18} color={Styles.ICONS}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={styles.filterDirection}
                                onPress={() => openSelectedModal(Selectors.YEAR)}
                            >
                                <Text style={[screenStyles.text, screenStyles.bold]}>Годы</Text>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={screenStyles.text}>{filterOptions.year}</Text>
                                    <Icon name={'arrow-forward-ios'} size={18} color={Styles.ICONS}/>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <SubModal
                title={'Страна'}
                isOpen={modalSelector === Selectors.COUNTRY}
                closeModal={closeModal}
                options={options.countries}
                onPressToOptions={setNewOption(Selectors.COUNTRY)}
                selected={filterOptions.country}
            />
            <SubModal
                title={'Жанры'}
                isOpen={modalSelector === Selectors.GENRE}
                closeModal={closeModal}
                options={options.genres}
                onPressToOptions={setNewOption(Selectors.GENRE)}
                selected={filterOptions.genre}
            />
            <YearSliderModal
                title={'Жанры'}
                isOpen={modalSelector === Selectors.YEAR}
                closeModal={closeModal}
                range={options.period}
                onPressToOptions={setNewOption(Selectors.YEAR)}
            />
        </View>
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

export default FilterModal