import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAJtsMJINZ96ilfoaTZw6oc1SiHHNbl-n4',
  authDomain: 'react-native-firebase-4bc97.firebaseapp.com',
  projectId: 'react-native-firebase-4bc97',
  storageBucket: 'react-native-firebase-4bc97.appspot.com',
  messagingSenderId: '261254914918',
  appId: '1:261254914918:web:7b570bd9efd25c6a0f1ea7'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {
  firebase,
  db
}