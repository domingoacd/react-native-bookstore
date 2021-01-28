import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import StickySearchBar from '../../components/StickySearchBar/StickySearchBar';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel';
import BookList from '../../components/BooksList/BooksList';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './homeStyles';
import { fetchBooks } from '../../actions/index'; 

const Home = props => {
  const showTopBar = useRef(false);
  const [barTracker, setTracker] = useState(false);
  const dispatch = useDispatch();
  
  const detectScrollPosition = e => {
    if (e.nativeEvent.contentOffset.y > 170) {
      showTopBar.current = true;
      setTracker(true);
    } else {
      showTopBar.current = false;
      setTracker(false);
    }
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <StickySearchBar showBar={showTopBar.current} test={barTracker} />
      <ScrollView
        style={styles.container}
        onScroll={detectScrollPosition}
        scrollEventThrottle={16}
      >
        <Header />
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
        <BooksCarousel slice={0}/>
        <Text style={styles.sectionTitle}>Popular</Text>
        <BooksCarousel slice={1}/>
        <Text style={styles.sectionTitle}>Recomended for you</Text>
        <BooksCarousel slice={2}/>
        <Text style={styles.sectionTitle}>Recomended for today</Text>
        <BookList />
      </ScrollView>
    </View>
  );
};

export default Home;
