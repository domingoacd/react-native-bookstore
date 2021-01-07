import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import firebase from '../database/firebase';

const UserList = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection('users').onSnapshot(querySnapShot => {
      let usersArr = [];

      querySnapShot.docs.forEach(doc => {
        const { name, email, phone } = doc.data();
        usersArr.push({
          id: doc.id,
          name,
          email,
          phone
        });
      });

      setUsers(usersArr);
    });
  }, []);
  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate('CreateUserScreen')}
      />

      {users.map(user => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() =>
              props.navigation.navigate('UserDetailScreen', { userId: user.id })
            }
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  'https://data.whicdn.com/images/322027365/original.jpg?t=1541703413'
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
