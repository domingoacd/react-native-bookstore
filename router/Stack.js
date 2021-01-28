import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './Menu';
import Home from '../screens/Home/Home';
import Second from '../screens/Second/Second';
import Profile from '../screens/Profile/Profile';
import BooksDetails from '../components/BooksDetails/BookDetails';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="book_details"
        component={BooksDetails}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const Stack = () => {
  return (
    <Menu navigator={Tab}>
      <Tab.Screen
        name="home"
        options={{ title: 'Home' }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="second"
        options={{ title: 'Second' }}
        component={Second}
      />
      <Tab.Screen
        name="profile"
        options={{ title: 'Profile' }}
        component={Profile}
      />
    </Menu>
  );
};

export default Stack;
