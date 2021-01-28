import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  coverBackgroundContainer: {
    flex: 1,
    position: 'relative',
    height: 400,
  },
  coverGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  coverBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  coverContainer: {
    width: 120,
    height: 200,
    borderRadius: 10,
    elevation: 7,
    borderColor: '#aaa',
    borderWidth: 1,
    overflow: 'hidden'
  },
  cover: {
    flex: 1
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#383838'
  },
  bookAuthor: {
    fontSize: 13,
    color: '#777',
    marginTop: 5 
  },
  starsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  ratingStar: {
    width: 14,
    height: 14,
    marginRight: 2,
    marginLeft: 2,
    marginTop: 5
  }
});
export default style;