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

//:: CSS imports
import { qrcode } from "../../assets/images.json";
import styles from "../../assets/styles/styles";
import friendStyles from "../../assets/styles/friends";

export default function Friends() {
  const navigation = useNavigation();
  const [find, setFind] = React.useState("");

  return (
    <View style={styles.container}>
      <Nav title={"Ajouter des amis"} />
      <TouchableOpacity
        style={friendStyles.btn}
        onPress={() => navigation.navigate("FriendScan")}
      >
        <Image
          source={{ uri: qrcode }}
          style={{ width: 25, height: 25 }}
          resizeMode="contain"
        />
        <Text style={styles.H2}>Ajouter avec QRcode</Text>
      </TouchableOpacity>
    </View>
  );
}
