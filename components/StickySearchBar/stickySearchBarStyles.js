import { StyleSheet, useWindowDimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -80,
    zIndex: 9999,
    width: '120%',
    height: 190,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 20,
    backgroundColor: '#8785EF'
  },
  inputContainer: {
    width: '70%',
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  wrapper: {
    height: 30,
    width: '100%',
    backgroundColor: 'transparent'
  },
  input: {
    color: '#fff'
  }
});

export default styles;
