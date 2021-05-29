import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../assets/styles/styles";

export default function Nav({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <View style={styles.nav1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 50, color: "black" }}>{"<"}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.H2}>{title}</Text>
    </View>
  );
}
