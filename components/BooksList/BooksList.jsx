import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './booksListStyles';

const BooksList = () => {
  const mock = Array.from({ length: 3 }).map((_, i) => {
    return {
      id: `L${i}`,
      title: `This is a title`,
      summary: 'Veniam est fugiat non mollit minim sit nisi culpa nulla enim cillum culpa irure. Elit aliqua ex Lorem fugiat occaecat.',
      date: 'June 14th, 2005'
    };
  });
  return mock.map(element => (
    <View style={styles.bookContainer} key={element.id}>
      <View style={styles.bookCover}></View>
      <View style={styles.textContainer}>
        <Text style={styles.bookTitle}>{element.title}</Text>
        <Text style={styles.bookSummary}>{element.summary}</Text>
        <Text style={styles.bookDate}>{element.date}</Text>
      </View>
    </View>
  ));
}

export default BooksList;