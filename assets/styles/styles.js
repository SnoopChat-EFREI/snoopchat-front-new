import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
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
    top: 0,
    width: Dimensions.get("window").width,
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
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  H2ROUGE: {
    color: "#FF0000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00B2FF",
    flexDirection: "row",
    padding: 20,
    marginTop: 20,
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
    backgroundColor: '#f9c2ff',
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
});

export default styles;
