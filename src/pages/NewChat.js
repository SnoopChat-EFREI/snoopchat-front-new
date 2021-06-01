import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Component import
import Nav from "../components/Nav";
import { fetchOneUser } from "../api/authorisation";
import initFriends from "../utils/initFriends";

//:: utils import
import { connectMembersChat } from "../api/Chat";

//:: Import CSS
import styles from "../../assets/styles/styles";
import friendStyles from "../../assets/styles/friends";

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
      <View style={friendStyles.listBox}>
        <ScrollView>
          {friends.map((item, index) => (
            <View key={index} style={friendStyles.friend}>
              <TouchableOpacity
                style={styles.TO}
                onPress={() => {
                  connectMembersChat(item.id);
                  navigation.navigate("Chat", {
                    new: true,
                  });
                }}
              >
                <Text style={styles.H2}>{item.pseudo}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
