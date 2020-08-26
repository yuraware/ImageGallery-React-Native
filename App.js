/**
 * 
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GalleryScreen from "./src/screens/GalleryScreen/GalleryScreen";
import ImageScreen from "./src/screens/ImageScreen/ImageScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
