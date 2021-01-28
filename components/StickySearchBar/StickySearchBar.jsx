import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, Button } from 'react-native';
import { SearchBar } from "react-native-elements";
import styles from './stickySearchBarStyles';

const stickySearchBar = ({ showBar, test }) => {
  const topMovementAnimationValue = useRef(new Animated.Value(0)).current;
  const [barVisible, setBarVisible] = useState(test);
  const [searchText, setSearchText] = useState('');

  const handleTextInput = text => {
    setSearchText(text);
  };

  const translateBar = () => {
    Animated.spring(topMovementAnimationValue, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  const hideBar = () => {
    Animated.spring(topMovementAnimationValue, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    if (showBar) {
      translateBar();
    } else {
      hideBar();
    }
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: topMovementAnimationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-200, 0]
              })
            }
          ]
        }
      ]}
    >
      <SearchBar
        placeholder="Search name or author"
        onChangeText={handleTextInput}
        value={searchText}
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.wrapper}
        inputStyle={styles.input}
        placeholderTextColor="#fff"
      />
    </Animated.View>
  );
};

export default stickySearchBar;
