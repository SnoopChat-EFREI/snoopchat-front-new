import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  itemChat: {
    paddingVertical: "5%",
    margin: 6,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: "white",
  },
  box: {
    backgroundColor: "#1acaff",
    maxHeight: 550,
    marginTop: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    borderRadius: 10,
    width: "90%",
    height: "90%",
  },
  textItem: {
    textAlign: "center",
  },
});

export default styles;
