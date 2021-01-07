import React  from 'react';
import { FlatList, Image, View, Text, useWindowDimensions , ImageBackground} from 'react-native';
import styles from './carouselStyles';
import slideDecoration from '../../assets/article-mini-decoration.png';
import slideRandomImage from '../../assets/randomSlide1.png';
import slideIcon from '../../assets/clockIcon.png';

const mock = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: `${i}`,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title from image ${i}`,
    subtitle: `And this is the subtitle from image ${i}`
  };
});

const Slide = ({ data }) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.slide(windowWidth)}>
      <View style={styles.slideTextContainer}>
        <Text style={styles.slideTitle}>
          Testing
        </Text>
        <Image source={slideIcon} style={styles.slideIcon}/>
      </View>
      <Image source={slideRandomImage} style={styles.slideImage} />
      <Image source={slideDecoration} style={styles.slideDecoration} />
    </View>
  );
};

const Carousel = props => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={mock}
      style={styles.carousel}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
    />
  );
};

export default Carousel;
