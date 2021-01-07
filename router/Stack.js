import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header/Header';
import Home from '../screens/Home/Home';

const St = createStackNavigator();

const Stack = () => {
  return (
    <St.Navigator>
      <St.Screen name="home" options={{title: 'Home', header: props => <Header />}} component={Home} />
    </St.Navigator>
  );
}

export default Stack;