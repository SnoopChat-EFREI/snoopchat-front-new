import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { backarrow } from "../../assets/images.json";
import styles from "../../assets/styles/styles";

export default function Nav({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <View style={styles.nav1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 28, height: 28 }}
            source={{ uri: backarrow }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.H2}>{title}</Text>
    </View>
  );
}
