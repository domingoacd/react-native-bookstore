import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    height: 50,
    alignSelf: 'center',
    marginTop: 40,
    width: 300,
  },
  container: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },

  wrapper: {
    backgroundColor: 'rgba(255,255,255,0.5)'
  },

  input: {
    borderRadius: 150,
    color: '#fff'
  }
});

export default styles;