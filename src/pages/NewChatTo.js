import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Component import
import Nav from "../components/Nav";

//:: utils import
import {connectMembersChat} from "../api/Chat"
//:: Import CSS
import styles from "../../assets/styles/styles";
import NavChat from "../components/NavChat";

export default function NewChatTo({ route }) {
  const navigation = useNavigation();

  if (route.params) {
    const { itemId, itemPseudo } = route.params;
    const [chat, setChat] = React.useState("");

    return (
      <View style={styles.container}>
        <Nav title={`To : ${JSON.stringify(itemPseudo)}`} />
        {/* <Text>{JSON.stringify(itemId)}</Text> */}
        <TextInput
          style={styles.input}
          onChangeText={(value) => setChat(value)}
          value={chat}
        />
        <TouchableOpacity style={styles.button} onPress={async ()=>{
            connectMembersChat(itemId)
        }}>
            <Text style={styles.buttonText}>ENVOYER</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return <Text>{navigation.navigate("NewChat")}</Text>;
  }
}
