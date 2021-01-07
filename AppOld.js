import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
  ImageBackground
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';
import Books from './books';
const coverTest = {
  uri: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg'
};
import starEmpty from './assets/star1.png';
import starYellow from './assets/star2.png';
import UserList from './screens/UsersList';

/* ------------------------FIRST------------------------------------------ */

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bookOnModalInfo, setBookOnModalInfo] = useState({});
  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available at ${selectedImage.remoteUri}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  const showModal = bookToShow => {
    setModalVisible(true);
    setBookOnModalInfo({
      ...bookToShow
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const getAllBooks = () => {
    return Books.map((book, index) => (
      <TouchableOpacity
        key={book.id}
        onPress={() => showModal(book)}
        style={index % 2 !== 0 ? styles.marTop : {}}
      >
        <View style={styles.book}>
          <ImageBackground
            source={book.image}
            style={styles.bookCover}
          ></ImageBackground>
        </View>
      </TouchableOpacity>
    ));
  };

  const getBookStars = book => {
    const bookRating = book.rating;
    let starsArray = [];

    if (bookRating) {
      for (let i = 0; i < 5; i++) {
        starsArray.push(
          <Image
            source={i <= Math.trunc(bookRating) - 1 ? starYellow : starEmpty}
            style={styles.bookmodal_star}
          />
        );
      }

      return starsArray;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your books</Text>
      <View style={styles.booksContainer}>{getAllBooks()}</View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.bookmodal}>
          <Text style={styles.bookmodal_category}>{bookOnModalInfo.genre}</Text>
          <Text style={styles.bookmodal_title}>{bookOnModalInfo.title}</Text>
          <View style={styles.bookmodal_infoContainer}>
            <Text style={styles.bookmodal_author}>
              Created by{' '}
              <Text style={styles.bookmodal_authorName}>
                {bookOnModalInfo.author}
              </Text>
            </Text>

            <Text style={styles.bookmodal_date}>{bookOnModalInfo.date}</Text>
          </View>

          <View style={styles.bookmodal_image}>
            <ImageBackground
              source={bookOnModalInfo.image}
              style={styles.bookmodal_cover}
            ></ImageBackground>
          </View>

          <View style={styles.bookmodal_rating}>
            <Text style={styles.bookmodal_ratingNumber}>
              {bookOnModalInfo.rating}
            </Text>
            {getBookStars(bookOnModalInfo)}
          </View>

          <Text style={styles.bookmodal_gpRating}>
            {bookOnModalInfo.votesAmount} Ratings on Google Play
          </Text>

          <Text style={styles.bookmodal_excerpt}>
            {bookOnModalInfo.excerpt}...
            <Text>Read more</Text>
          </Text>
        </View>
      </Modal>
    </View>
  );
  /* return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri: selectedImage !== null ? selectedImage.localUri : URI
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      {selectedImage ? (
        <TouchableOpacity style={styles.button} onPress={openShareDialog}>
          <Text style={styles.buttonText}>Share image</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}

    </View>
  );*/
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 30,
    color: '#27164D',
    marginTop: 250,
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 4,
    width: 100
  },
  buttonText: {
    color: '#383838',
    fontSize: 16,
    textAlign: 'center'
  },
  booksContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  book: {
    width: 130,
    height: 220,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden'
  },
  bookCover: {
    flex: 1,
    resizeMode: 'cover'
  },
  bookName: {
    textAlign: 'center',
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 2,
    paddingLeft: 2,
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff'
  },
  bookmodal: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 18,
    backgroundColor: '#FFF'
  },
  bookmodal_title: {
    fontSize: 32,
    textAlign: 'left',
    color: '#27164D'
  },
  bookmodal_category: {
    color: '#FF8D6E'
  },
  bookmodal_infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  bookmodal_author: {
    color: '#A8ACAF'
  },
  bookmodal_authorName: {
    color: '#27164D'
  },
  bookmodal_date: {
    color: '#A8ACAF'
  },
  bookmodal_image: {
    position: 'relative',
    left: 20,
    width: 300,
    height: 180,
    marginTop: 20,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: 'red',
    overflow: 'hidden'
  },
  bookmodal_cover: {
    flex: 1,
    resizeMode: 'cover'
  },
  bookmodal_rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  bookmodal_ratingNumber: {
    fontSize: 30,
    marginRight: 8,
    color: '#27164D'
  },
  bookmodal_star: {
    width: 18,
    height: 18,
    marginRight: 4
  },

  bookmodal_gpRating: {
    color: '#A8ACAF'
  },
  bookmodal_excerpt: {
    color: '#27164D',
    lineHeight: 18,
    marginTop: 15
  },
  marTop: {
    marginTop: 30
  }
});

/*--------------------------------------- SECOND-------------------------------------------------- */
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{ title: 'Users List' }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: 'Create a new user' }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: 'User Details' }}
      />
    </Stack.Navigator>
  );
}

const App2 = () => {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
} 
export default App2;
