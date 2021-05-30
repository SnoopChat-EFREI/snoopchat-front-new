import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
  box: {
    marginTop: "40%",
    height: "50%",
    width: "100%",
  },
  photo: {
    height: 500,
  },
  btn: {
    marginBottom: "25%",
    backgroundColor: "#1acaff",
    paddingHorizontal: "15%",
    paddingVertical: "3%",
    borderRadius: 25,
  },
  buttonText: {
    color: "#0082ba",
    fontWeight: "bold",
  },
  listBox: {
    width: 250,
  },
  friend: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default styles;
