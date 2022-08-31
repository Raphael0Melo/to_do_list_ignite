import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#333333",
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    padding: 14,
    borderRadius: 5,
    marginBottom: 15,
    // paddingBottom: 100,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
  },
  textDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontSize: 16,
  },
  image: {
    fontSize: 14,
  },
})