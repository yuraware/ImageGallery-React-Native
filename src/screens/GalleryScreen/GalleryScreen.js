import React from "react";
import { View, FlatList, Image, TouchableHighlight } from "react-native";
import usePicsumPhotos from "../../hooks/usePicsum";
import FastImage from 'react-native-fast-image';
import PhotoList from '../../components/PhotoList'
import { styles } from "./styles";

const GalleryScreen = ({ navigation }) => {

   const [photos, fetchMore] = usePicsumPhotos();

   return (
      <PhotoList
         photos={photos}
         fetchMore={fetchMore}
         navigation={navigation}
      />
   );
};

export default GalleryScreen;