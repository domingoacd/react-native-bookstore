import React, {useMemo, useState} from 'react';
import { FlatList, View, ImageBackground, Text, Image } from 'react-native';
import { connect } from "react-redux";
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
const BooksCarousel = (props) => {
  const booksToShow = props.data.slice(props.number * 10, props.number * 10 + 10);
  
  const Slide = ({data}) => {
    return(
      <View style={styles.bookContainer}>
        <View style={styles.bookCover}>
          <ImageBackground style={styles.cover(data.cover)} source={{uri: data.cover}}> 
            <View style={styles.bookRating}>
              <Image source={starIcon} style={styles.star}/>
              <Text style={styles.ratingNumber}>{getRandomRating()}</Text>
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.bookTitle}>{data.title}</Text>
        <Text style={styles.bookCategory}>Category</Text>
      </View>
    )
  }

  return useMemo(
    () => (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={booksToShow}
        style={styles.booksCarousel}
        renderItem={({ item }) => <Slide data={item} />}
      />
    ),
    [props.data]
  );
}

const mapStateToProps = (state, ownProps) => ({
  data: state.books,
  number: ownProps.slice,
});

export default connect(mapStateToProps)(BooksCarousel);