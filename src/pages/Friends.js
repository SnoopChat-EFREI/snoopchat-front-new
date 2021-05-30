import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Nav from "./../components/Nav";

import { qrcode } from "../../assets/images.json";

import styles from "../../assets/styles/styles";

export default function Friends() {
  const navigation = useNavigation();
  const [find, setFind] = React.useState("");

  return (
    <View style={styles.container}>
      <Nav title={"Ajouter des amis"} />
      <TextInput
        style={styles.input}
        placeholder="Rechercher un ami"
        onChangeText={(value) => setFind(value)}
        value={find}
      />
      <TouchableOpacity
        style={styles.buttonConn}
        onPress={() => navigation.navigate("FriendScan")}
      >
        <Image
          source={{ uri: qrcode }}
          style={{ position: "absolute", width: 25, height: 25, left: 30 }}
        />
        <Text style={styles.H2}>Ajouter avec QRcode</Text>
      </TouchableOpacity>
    </View>
  );
}
