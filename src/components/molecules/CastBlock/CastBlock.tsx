import {FlatList, ImageBackground, Text, View} from "react-native";
import React from "react";
import {BlocksStyles} from "../../../styles/screens";

const CastBlock = ({cast}: { cast: any }) => {
    return (
        <View style={BlocksStyles.blockWrapper}>
            <Text style={BlocksStyles.blockTitle}>Актёрский состав:</Text>
            <View style={BlocksStyles.blockContentWrapper}>
                <FlatList
                    keyExtractor={(item) => item.posterUrl + Math.random()}
                    data={cast}
                    horizontal
                    renderItem={({item}: any) =>
                        <View style={{marginHorizontal: 10, width: 80}}>
                            <ImageBackground source={{uri: item.posterUrl}} style={{height: 100, width: '100%'}}/>
                            <Text style={{color: '#fff'}}>{item.nameEn || item.nameRu }</Text>
                        </View>
                    }
                >
                </FlatList>
            </View>
        </View>
    )
}

export default CastBlock