import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text } from 'react-native';
import styles from './headerStyles';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const handleTextInput = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.header}>
      <SearchBar
        placeholder="Search name or author"
        onChangeText={handleTextInput}
        value={searchText}
        containerStyle={styles.container}
        inputContainerStyle={styles.wrapper}
        inputStyle={styles.input}
        placeholderTextColor='#fff'
      />
    </View>
  );
};

export default Header;
