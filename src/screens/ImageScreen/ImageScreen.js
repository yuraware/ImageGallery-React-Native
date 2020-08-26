import React from "react";
import { View, Image } from "react-native";
import FastImage from 'react-native-fast-image'
import { styles } from "./styles";

const ImageScreen = ({ route, navigation }) => {

    const { item } = route.params;

    return (
        <View>
            <FastImage
                source={{
                    uri: item.download_url,
                }}
                style={styles.image}
            />
        </View>
    );
};

export default ImageScreen;