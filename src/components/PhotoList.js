import React from "react";
import { View, FlatList, Image, TouchableHighlight } from "react-native";
import FastImage from 'react-native-fast-image';
import { styles } from "./styles";

const PhotoList = ({ photos, fetchMore, navigation }) => {
    return (
        <View>
           <FlatList
              data={photos}
              keyExtractor={(item, index) => {
                 return item.id + index.toString();
              }}
              onEndReachedThreshold={0.9}
              onEndReached={fetchMore}
              renderItem={({ item }) => {
                 return (
                    <TouchableHighlight
                       onPress={() => {
                          navigation.push('Image', {
                             item: item
                          });
                       }
                       }
                    >
                       <FastImage
                          source={{
                             uri: item.download_url,
                          }}
                          style={styles.image}
                       />
                    </TouchableHighlight>
                 )
              }}
           />
        </View>
     );
};

export default PhotoList;

