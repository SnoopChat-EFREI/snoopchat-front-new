import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: "30%",
    height: "100%",
  },
  profileContainerForm: {
    display: "flex",
    alignItems: "center",
  },
  profileBox: {
    width: "100%",
    alignItems: "center",
  },
  profileBoxForm: {
    position: "absolute",
    top: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1acaff",
    padding: 15,
    marginTop: "8%",
    borderColor: "#00B2FF",
    borderWidth: 2,
  },
  textButton: {
    color: "#0082ba",
    fontWeight: "bold",
  },

  buttonList: {
    alignItems: "center",
    backgroundColor: "#1AC6F0",
    width: "95%",
    paddingTop: "15%",
    paddingBottom: "15%",
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    width: "45%",
  },
  buttonProfile: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 30,
    paddingLeft: 30,
    height: 60,
    margin: 10,
    width: 300,
    borderRadius: 10,
  },
  labelInput: {
    marginLeft: 15,
    marginTop: 5,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  btnForm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498DB",
    flexDirection: "row",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  textBtnForm: {
    color: "white",
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
