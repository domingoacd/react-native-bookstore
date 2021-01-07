import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  booksCarousel: {
    marginBottom: 30
  },
  bookContainer: {
    width: 130,
    marginRight: 10,
    marginLeft: 10
  },
  bookCover: {
    height: 200,
    flex: 1,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 7,
    overflow: 'hidden'
  },
  cover: (coverColor) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: coverColor
  }),

  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 2,
    color: "#383838"
  },

  bookCategory: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#aaa',
  },

  bookRating: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#5653F9'
  },

  star: {
    width: 15,
    height: 15,
    marginBottom: 5,
  },

  ratingNumber: {
    fontSize: 13,
    color: '#fff'
  }
});

export default styles;