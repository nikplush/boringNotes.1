import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

import {BlocksStyles} from "../../../styles/screens";
import Collapsible from 'react-native-collapsible';
import Icon from "react-native-vector-icons/Feather";
import TextCard from "../../atoms/TextCard/TextCard";


const CollapsibleBlock = ({title, data}: any) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <View style={BlocksStyles.blockWrapper}>
            <TouchableOpacity
                onPress={() => setIsCollapsed((prew) => !prew)}
                style={{flexDirection: "row", justifyContent: "space-between"}}
            >
                <Text style={BlocksStyles.blockTitle}>{title}</Text>
                <Icon name={isCollapsed ? 'arrow-down' : 'arrow-up'} color={"#eaeaea"} size={18}/>
            </TouchableOpacity>
            <View>
                <Collapsible collapsed={isCollapsed}>
                    {data.map((item: any) => <TextCard key={item} text={item}/>)}
                </Collapsible>
            </View>
        </View>
    )
}

export default CollapsibleBlock