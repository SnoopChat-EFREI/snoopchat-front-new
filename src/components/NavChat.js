import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../assets/styles/styles";
import { user, search, friends, write } from "../../assets/images.json";

export default function NavChat() {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <View style={styles.nav1}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={{ uri: user }} style={styles.imageNav} />
        </TouchableOpacity>

        <Image source={{ uri: search }} style={styles.imageNav} />
      </View>
      <Text>Chat</Text>
      <View style={styles.nav2}>
        <TouchableOpacity onPress={() => navigation.navigate("Friends")}>
          <Image source={{ uri: friends }} style={styles.imageNav} />
        </TouchableOpacity>
        <Image source={{ uri: write }} style={styles.imageNav} />
      </View>
    </View>
  );
}
