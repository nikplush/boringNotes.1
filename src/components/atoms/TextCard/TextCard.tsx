import React from "react";
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {BlocksStyles} from "../../../styles/screens";
import {Styles} from "../../../constans/styles/Styles";

interface TextCardProps {
    text: string
}

const TextCard = ({text}: TextCardProps) =>
    <View style={BlocksStyles.blockContentWrapper}>
        <View style={{flexDirection: "row"}}>
            <Icon name={'dot-single'} color={Styles.ICONS} size={18}/>
            <Text style={BlocksStyles.blockContent}>
                {text}
            </Text>
        </View>
    </View>


export default TextCard