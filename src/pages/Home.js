import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import NavBar from "../components/NavChat";
import styles from "../../assets/styles/styles";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <NavBar />
      <Text>Aucune discussion en cours</Text>
    </View>
  );
}
