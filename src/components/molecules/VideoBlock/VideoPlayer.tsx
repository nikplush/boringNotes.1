import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {BlocksStyles} from "../../../styles/screens";

const VideoBlock = ({videoId}: { videoId: string }) => {
    const [playing, setPlaying] = useState(false);

    const onPress = () => {
        setPlaying((prevState => !prevState))
    }

    return (
        <View style={BlocksStyles.blockWrapper}>
            <Text style={BlocksStyles.blockTitle}>Трейлер:</Text>
            <View style={BlocksStyles.blockContentWrapper}>
                <View style={{width: '100%', alignItems: "center"}}>
                    <View style={{position: "relative"}}>
                        <YoutubePlayer
                            play={playing}
                            height={150}
                            width={250}
                            videoId={videoId}
                            webViewStyle={{opacity: 0.99}}
                            webViewProps={{
                                onShouldStartLoadWithRequest: request => {
                                    return request.mainDocumentURL === 'about:blank';
                                },
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                height: 200,
                                width: '100%',
                            }}
                            onPress={onPress}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default VideoBlock