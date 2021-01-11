import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 20
  },

  menuWrapper: {
    height: 60
  },

  icon: isFocused => ({
    width: 30,
    height: 35,
    tintColor: isFocused ? '#8785EF' : '#ddd'
  })
});

export default styles;