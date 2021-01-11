import React from 'react';
import { createStackNavigator,  } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from './Menu';
import Home from '../screens/Home/Home';
import Second from "../screens/Second/Second";
import Profile from "../screens/Profile/Profile";


const St = createStackNavigator();
const Tab = createBottomTabNavigator();

const Stack = () => {
  return (
    <Menu navigator={Tab}>
      <Tab.Screen name="home" options={{ title: 'Home' }} component={Home} />
      <Tab.Screen name="second" options={{ title: 'Second' }} component={Second} />
      <Tab.Screen name="profile" options={{ title: 'Profile' }} component={Profile} />
    </Menu>
  );
}

export default Stack;