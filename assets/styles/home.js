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
    textAlign: "left",
    fontSize: 17,
    paddingHorizontal: 20,
  },
  nbItem: {
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#1acaff",
    borderRadius: 400,
    color: "white",
  },
  msgBox: {
    display: "flex",
    flexDirection: "row",
  },
});

export default styles;
