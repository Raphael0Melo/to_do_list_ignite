import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  form: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginTop: -28,
    // marginBottom: 0,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#333333',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 7,
    // fontFamily: "Inter",
    fontWeight: "regular"
  },
  button: {
    height: 56,
  },
  info: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 50,
    // borderBottomWidth: 3,
    // borderBottomColor: '#333333',
    
  },
  text1: {
    color: '#4EA8DE',
  },
  text2: {
    color: '#8284FA',
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
  },
  textEmpty: {
    color: "#808080",
    fontSize: 16,
    marginTop: 15,
  },
  textEmpty2: {
    color: "#808080",
    fontSize: 14,
  }
  
})