import React from 'react';
import { Image, View } from "react-native";
import { createStackNavigator,  } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home/Home';
import Second from "../screens/Second/Second";
import Profile from "../screens/Profile/Profile";
import homeIcon from '../assets/icon-home.png';
import secondIcon from '../assets/icon-second.png';
import profileIcon from '../assets/icon-profile.png';

const tabBarOptions = {
  style: {
    height: 150
  }
};
const St = createStackNavigator();
const Tab = createBottomTabNavigator();

const MenuIcon = ({iconImage, isFocused}) => {
  return (
    <Image
      source={iconImage}
      style={{
        width: 30,
        height: 35,
        tintColor: isFocused ? '#8785EF' : '#ddd'
      }}
    />
  );
}
const Stack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 60,
          borderTopColor: '#ddd',
          borderTopWidth: 1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 20
        },
        tabStyle: {
          height: 60
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            home: homeIcon,
            second: secondIcon,
            profile: profileIcon
          }
          


          return <MenuIcon iconImage={icons[route.name]} isFocused={focused} />;
        }
      })}
    >
      <Tab.Screen name="home" options={{ title: 'Home' }} component={Home} />
      <Tab.Screen name="second" options={{ title: 'Second' }} component={Second} />
      <Tab.Screen name="profile" options={{ title: 'Profile' }} component={Profile} />
    </Tab.Navigator>
  );
}

export default Stack;