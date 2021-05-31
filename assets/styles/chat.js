import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    width: "90%",
    height: 500,
    position: "absolute",
  },
  msgContainerFriend: {
    display: "flex",
    //flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    borderColor: "red",
    borderLeftWidth: 2,
    //borderRadius: 25,
  },
  msgContainer: {
    display: "flex",
    //flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    borderColor: "blue",
    borderLeftWidth: 2,
  },
  msgSender: {
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 2,
    color: "red",
  },
  msgSenderMe: {
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 2,
    color: "blue",
  },
  inputBox: {
    position: "absolute",
    bottom: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    width: "80%",
    padding: 10,
    marginTop: 30,
    borderColor: "grey",
    borderWidth: 1,
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#00a8ff",
    borderWidth: 2,
    backgroundColor: "#00a8ff",
    borderRadius: 10,
    justifyContent: "center",
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    width: "70%",
    padding: 5,
  },
});

export default styles;
