import React from 'react';
import { FlatList, View, ImageBackground, Text, Image } from 'react-native';
import styles from './booksCarouselStyles';
import starIcon from '../../assets/star.png';

const getRandomColor = () => {
  let rcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  while(rcolor.length < 7) {
    rcolor = `${rcolor}0`;
  }

  return rcolor;
}  

const getRandomRating = () => {
  return (Math.random() * 5).toFixed(1);
}
const BooksCarousel = props => {
  const mock = Array.from({length: 10}).map((_, i) => {
    return {
      id: `e${i}`,
      coverColor: getRandomColor()
    }
  });

  const Slide = ({data}) => {
    
    return(
      <View style={styles.bookContainer}>
        <View style={styles.bookCover}>
          <ImageBackground style={styles.cover(data.coverColor)}>
            <View style={styles.bookRating}>
              <Image source={starIcon} style={styles.star}/>
              <Text style={styles.ratingNumber}>{getRandomRating()}</Text>
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.bookTitle}>{`Book Title Number ${data.id}`}</Text>
        <Text style={styles.bookCategory}>Category</Text>
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={mock}
      style={styles.booksCarousel}
      renderItem={({item}) => <Slide data={item}/>}
    />
  );
}

export default BooksCarousel;