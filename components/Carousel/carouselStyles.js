import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carousel: {
    position: 'relative',
    bottom: 30
  },
  /* windowWidth - 30*/
  slide: windowWidth => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
    width: windowWidth - 60,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    overflow: 'hidden'
  }),
  slideDecoration: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
    width: 190,
    height: 140,
    resizeMode: 'cover'
  },
  slideImage: {
    position: 'relative',
    top: 10,
    width: 115,
    height: 115,
    resizeMode: 'contain'
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#383838'
  },
  slideIcon: {
    width: 35,
    height: 35
  }
});

export default styles;