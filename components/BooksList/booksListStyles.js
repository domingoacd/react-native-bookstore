import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 150,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  bookCover: {
    width: 100,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: 'red'
  },
  textContainer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 20
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838',
    marginBottom: 10,
  },
  bookSummary: {
    fontSize: 15,
    marginBottom: 10,
    color: '#999',
    flex: 1
  },
  bookDate: {
    fontSize: 13,
    color: '#bbb'
  }
});

export default styles;