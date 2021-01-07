import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 50,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 40,
    width: 300
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
    color: '#fff',

  }
});

export default styles;