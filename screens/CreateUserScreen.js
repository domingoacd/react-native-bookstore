import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from '../database/firebase';

const CreateUserScreen = (props) => {
  const [ fields, setFields ] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChangeText = (name, value) => {
    setFields({
      ...fields,
      [name]: value
    });
  }

  const createNewUser = async () => {
    if (fields.name === '') {
      alert('Please provide a name')
    } else {
      try {
        await firebase.db.collection('users').add({
          name: fields.name,
          email: fields.email,
          phone: fields.phone
        });
        props.navigation.navigate('UserList');
      } catch (err) {
        console.error('Error saving new user -> ' + err);
      }
    }
  }
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={value => handleChangeText('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={value => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={value => handleChangeText('phone', value)}
        />
      </View>
      <View>
        <Button title="Save user" onPress={() => createNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
export default CreateUserScreen;
