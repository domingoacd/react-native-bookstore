import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import Carousel  from '../../components/Carousel/Carousel';
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel';
import BookList from '../../components/BooksList/BooksList';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './homeStyles';

const Home = props => {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.homeTopGradient}>
        <LinearGradient
          colors={['#8785EF', '#3633CC']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 1 }}
          locations={[0, 1]}
        />
      </View>
      <Carousel />
      <Text style={styles.sectionTitle}>Recently opened</Text>
      <BooksCarousel />
      <Text style={styles.sectionTitle}>Popular</Text>
      <BooksCarousel />
      <Text style={styles.sectionTitle}>Recomended for you</Text>
      <BooksCarousel />
      <Text style={styles.sectionTitle}>Recomended for today</Text>
      <BookList />
    </ScrollView>
  );
};

export default Home;
