import React from 'react';
import { View, ScrollView, Text, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './bookDetailsStyles';
import emptyStar from '../../assets/ratingEmpty.png';
import fullStar from '../../assets/ratingFull.png';

const BookDetails = (props) => {
  
  const getRatingStars = (rating) => {

    const starsNumber = Math.trunc(Number(rating));

    return Array.from({ length: 5}).map((_, i) => {
      return i < starsNumber ? (
        <Image key={`rst${i}`} source={fullStar} style={styles.ratingStar} />
      ) : (
        <Image key={`rst${i}`} source={emptyStar} style={styles.ratingStar} />
      );
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverBackgroundContainer}>
        <LinearGradient
          colors={['#cecece', '#fff']}
          style={styles.coverGradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.6 }}
          locations={[0, 1]}
        />
        <ImageBackground
          style={styles.coverBackgroundImage}
          source={{ uri: props.route.params.cover }}
          imageStyle={{ opacity: 0.3 }}
        >
          <View style={styles.coverContainer}>
            <ImageBackground
              style={styles.cover}
              source={{ uri: props.route.params.cover }}
            ></ImageBackground>
          </View>

          <Text style={styles.bookTitle}>{props.route.params.title}</Text>
          <Text style={styles.bookAuthor}>{props.route.params.author}</Text>
          <View style={styles.starsContainer}>
            {getRatingStars(props.route.params.rating)}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default BookDetails;
