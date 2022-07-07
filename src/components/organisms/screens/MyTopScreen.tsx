import React from "react";
import DraggableFlatList, {ScaleDecorator} from 'react-native-draggable-flatlist'
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ScreenWrapper from "../../molecules/ScreenWrapper/ScreenWrapper";
import {useDispatch, useSelector} from "react-redux";
import {Favorite} from "../../../interfaces/redux/favorits";
import {Styles} from "../../../constans/styles/Styles";
import {Film} from "../../../interfaces/redux/films";
import {setNewOrder} from "../../../redux/slices/myTopSlice";

const MyTopScreen = ({navigation}: { navigation?: any }) => {
    const myTop = useSelector((state: any) => state.myTop.favorites)
    const sortedList = [...myTop].sort((a: Favorite, b: Favorite) => a.positionInTop - b.positionInTop)
    const dispatch = useDispatch()

    const navigateToDetailsPage = (film: Film) => {
        navigation.navigate('Details', {film})
    }

    const newOrder = ({data}: { data: Favorite[] }) => {
        const a = data.map((item, i) => ({...item, positionInTop: i + 1}))
        dispatch(setNewOrder(a))
    }

    return (
        <ScreenWrapper isScrolling={false}>
            <DraggableFlatList
                keyExtractor={item => '' + item.positionInTop}
                data={sortedList}
                onDragEnd={newOrder}
                renderItem={({item, drag, isActive}) =>
                    <ScaleDecorator>
                        <TouchableOpacity
                            activeOpacity={1}
                            onLongPress={drag}
                            disabled={isActive}
                            onPress={() => navigateToDetailsPage(item.filmInfo)}
                        >
                            <View style={MyTopStyles.item}>
                                <Text style={MyTopStyles.position}>{item.positionInTop}</Text>
                                <Image source={{uri: item.filmInfo.posterUrlPreview}} style={MyTopStyles.poster}/>
                                <Text style={{color: '#fff'}}>
                                    {item.filmInfo.nameRu || item.filmInfo.nameEn}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </ScaleDecorator>
                }/>
        </ScreenWrapper>
    );
}

export default MyTopScreen

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
    }
});