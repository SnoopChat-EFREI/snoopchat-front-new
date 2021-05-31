import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Component import
import Nav from "../components/Nav";
import { fetchOneUser } from "../api/authorisation";
import initFriends from "../utils/initFriends";

//:: utils import

//:: Import CSS
import styles from "../../assets/styles/styles";

export default function NewChat() {
  const navigation = useNavigation();
  const [friends, setFriends] = React.useState([]);
  const [id, setId] = React.useState("");
  const [pseudo, setPseudo] = React.useState("");

  async function getOneUser() {
    await setFriends(initFriends(await fetchOneUser()));
  }

  React.useEffect(() => {
    getOneUser();
  }, []);

    return (
      <View style={styles.container}>
        <Nav title={"Démarrer une discussion"} />
        {friends.map((item, index) => (
          <TouchableOpacity
            style={styles.TO}
            onPress={() => {
              navigation.navigate('NewChatTo', {
                itemId: item.id,
                itemPseudo: item.pseudo,
              });
            }}
          >
            <Text style={styles.H2}>{item.pseudo}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
    );
}
