import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import firebase from '../database/firebase';

const UserDetailScreen = props => {
  const [ loading, setLoading ] = useState(true);
  const [ userDetails, setUserDetails ] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  })

  const getUserById = async id => {
    const dbRef = firebase.db.collection('users').doc(id);
    const doc = await dbRef.get();
    const user = doc.data();

    setUserDetails({
      ...user,
      id: doc.id
    });

    setLoading(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);


  const handleChangeText = (name, value) => {
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const deleteUser = async () => {
    const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
    await  dbRef.delete();

    props.navigation.navigate('UserList');
  }

  const updateUser = async () => {
    const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
    await dbRef.set({
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phone
    });
    props.navigation.navigate('UserList');
  }

  const confirmationAlert = () => {
    Alert.alert('Remove User', 'Are you sure you want to delete this user?', [
      {text: 'Yes', onPress: () => deleteUser()},
      {text: 'No', onPress: () => console.log(false)}
  ])
  }

  if (loading) {
    return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#9e9e9e"></ActivityIndicator>
    </View>)
  }
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          value={userDetails.name}
          onChangeText={value => handleChangeText('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          value={userDetails.email}
          onChangeText={value => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          value={userDetails.phone}
          onChangeText={value => handleChangeText('phone', value)}
        />
      </View>
      <View>
        <Button color="#19AC52" title="Update user" onPress={() => updateUser()} />
      </View>

      <View style={styles.deleteBtn}>
        <Button color="#e37299" title="Delete user" onPress={() => confirmationAlert()} />
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
  },
  deleteBtn: {
    marginTop: 5
  },
  loaderContainer: {
    marginTop: 20
  }
});
export default UserDetailScreen;
