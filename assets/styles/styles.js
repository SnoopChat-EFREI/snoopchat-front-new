import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#00B2FF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "30%",
  },
  nav: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    top: 50,
    left: 10,
    right: 10,
    height: "10%",
  },
  nav1: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    left: 0,
    width: "30%",
    height: "100%",
  },
  nav2: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    right: 0,
    width: "30%",
    height: "100%",
  },
  input: {
    borderRadius: 5,
    width: 350,
    height: 55,
    backgroundColor: "#FFF",
    margin: 10,
    padding: 8,
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  link: {
    color: "black",
    textDecorationLine: "underline",
  },
  H1: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  H2: {
    color: "#4a4a4a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  H2ROUGE: {
    color: "#D98880",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  H2alert: {
    color: "#FF0000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498DB",
    flexDirection: "row",
    padding: 20,
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  imageNav: {
    width: 30,
    height: 30,
    margin: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  checkbox: {
    alignSelf: "center",
  },
  bottomNav: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    paddingBottom: 18,
    backgroundColor: "#FFFFFF",
    height: 50,
  },
  pingMap: {
    borderColor: "red",
    borderRadius: 30,
  },
  TO: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 30,
    width: "90%"
  }
});

export default styles;
