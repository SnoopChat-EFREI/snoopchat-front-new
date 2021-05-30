import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  connectionContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "50%",
  },
  connectionInput: {
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    padding: 15,
    marginBottom: "10%",
    borderRadius: 10,
  },
  link: {
    color: "black",
    textDecorationLine: "underline",
  },
  connectionButton: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1acaff",
    flexDirection: "row",
    padding: 15,
    marginTop: "5%",
    width: "50%",
    borderColor: "#1AC6F0",
    borderWidth: 1,
    borderRadius: 25,
  },
  buttonText: {
    color: "#0082ba",
    fontWeight: "bold",
  },
  connectionNav: {
    position: "absolute",
    height: 60,
    elevation: 0,
  },
  connectionBox: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "105%",
    borderWidth: 1,
    borderColor: "#00B2FF",
  },
  navInput: {
    color: "#00B2FF",
    fontWeight: "bold",
  },
  fail: {
    backgroundColor: "#CC4114",
    color: "white",
    padding: 20,
    margin: 20,
    textAlign: "center",
  },
});

export default styles;
