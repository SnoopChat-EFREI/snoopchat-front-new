import React from "react";
import { View } from "react-native";

import styles from "../../assets/styles/styles";
import RegForm from "../components/RegForm";

export default function Register() {
  return (
    <View style={styles.container}>
      <RegForm />
    </View>
  );
}
