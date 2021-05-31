import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Component import
import Nav from "../components/Nav";

//:: utils import
import { getMessages, sendMessages } from "../api/Chat";

//:: Import CSS
import styles from "../../assets/styles/styles";

export default function Messages({ route }) {
  const [newMsg, setNewMsg] = useState(null);
  const [msg, setMsg] = useState(null);
  const navigation = useNavigation();
  if (!route.params) {
    return <Text>{navigation.navigate("NewChat")}</Text>;
  }

  const { chatId, chatPseudo } = route.params;
  const fetchMessages = async () => {
    setMsg(await getMessages(chatId));
  };

  useEffect(() => {
    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  return (
    <View style={styles.container}>
      <Nav title={JSON.stringify(chatPseudo)} />
      <Text>{JSON.stringify(chatId)}</Text>
      {msg ? (
        msg.map((message, index) => (
          <View>
            <Text>{message.body}</Text>
          </View>
        ))
      ) : (
        <View></View>
      )}
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setNewMsg(value)}
          placeholder="Aa..."
        />
        <TouchableOpacity
          style={styles.button}
          value={newMsg}
          onPress={() => {
            newMsg ? sendMessages(chatId, newMsg) : "";
          }}
        >
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
