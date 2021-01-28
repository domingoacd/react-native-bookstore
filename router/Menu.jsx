import React from 'react';
import { Image } from 'react-native';
import homeIcon from '../assets/icon-home.png';
import secondIcon from '../assets/icon-second.png';
import profileIcon from '../assets/icon-profile.png';
import styles from './menuStyles';

const MenuIcon = ({ iconImage, isFocused }) => {
  return <Image source={iconImage} style={styles.icon(isFocused)} />;
};

const Menu = ({ navigator, children }) => {
  return (
    <navigator.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.container,
        tabStyle: styles.menuWrapper
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            home: homeIcon,
            second: secondIcon,
            profile: profileIcon
          };

          return <MenuIcon iconImage={icons[route.name]} isFocused={focused} />;
        }
      })}
    >
      {children}
    </navigator.Navigator>
  );
};

export default Menu;
