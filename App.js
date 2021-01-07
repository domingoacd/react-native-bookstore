import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Stack from './router/Stack';

const App = () => {

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

export default App; 