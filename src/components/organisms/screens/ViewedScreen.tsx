import React, {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ScreenWrapper from "../../molecules/ScreenWrapper/ScreenWrapper";
import {useSelector} from "react-redux";
import {Styles} from "../../../constans/styles/Styles";
import {Film} from "../../../interfaces/redux/films";
import FilterModal from "../../molecules/FilterModal/FilterModal";
import {separatorFilmInfo} from "../../../utils/separateFilmsInfo";
import {filterFilmsByFilerOptions} from "../../../utils/filterFilms";
import SortModal from "../../molecules/SortModal/SortModal";
import {sortFilmsBySortMethod} from "../../../utils/sortFilms";
import OptionsContainer from "../../molecules/OptionsContainer/OptionsContainer";

export interface FilterOptions {
    country: string,
    genre: string,
    year: number
}

const SortingOptions = [
    'А-Я',
    'Рейтинг',
    'Год'
]

const ViewedScreen = ({navigation}: { navigation: any }) => {
    const myTop = useSelector((state: any) => state.viewed.viewed)
    const options = separatorFilmInfo(myTop)
    const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false)
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
        country: '',
        genre: '',
        year: options.period.maxYear
    })
    const [isOpenSortMethod, setIsOpenSortMethod] = useState<boolean>(false)
    const [filteredFilms, setFilteredFilms] = useState<Film[]>(myTop)
    const [sortMethod, setSortMethod] = useState<number>()

    useEffect(() => {
        const updatedFilms = filterFilmsByFilerOptions(myTop, filterOptions, options.period.maxYear)
        setFilteredFilms(updatedFilms)
    }, [filterOptions])

    const navigateToDetailsPage = (film: Film) => {
        navigation.navigate('Details', {film})
    }

    const updateFilterOptions = (options: FilterOptions) => {
        setFilterOptions(options)
    }

    return (
        <ScreenWrapper isScrolling={false}>
            <OptionsContainer
                onPressToFilter={() => setIsOpenFilterModal(true)}
                onPressToSort={() => setIsOpenSortMethod(true)}
            />
            <FlatList
                data={sortFilmsBySortMethod(filteredFilms, sortMethod)}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={() => navigateToDetailsPage(item)}>
                        <View style={MyTopStyles.item}>
                            <Image source={{uri: item.posterUrlPreview}} style={MyTopStyles.poster}/>
                            <Text style={{color: '#fff'}}>
                                {item.nameRu || item.nameEn}
                            </Text>
                        </View>
                    </TouchableOpacity>
                }/>
            <FilterModal
                isOpenFilterModal={isOpenFilterModal}
                setIsOpenFilterModal={setIsOpenFilterModal}
                options={options}
                filterOptions={filterOptions}
                updateFilterOptions={updateFilterOptions}
            />
            <SortModal
                isOpen={isOpenSortMethod}
                closeModal={() => setIsOpenSortMethod(false)}
                options={SortingOptions}
                onPressToOptions={setSortMethod}
            />
        </ScreenWrapper>
    );
}

export default ViewedScreen

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
        backgroundColor: Styles.BLOCK_COLOR,
        width: 50,
        height: 28,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 5
    }
});
