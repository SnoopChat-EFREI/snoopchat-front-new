import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Component import
import Nav from "../components/Nav";

//:: utils import
import { getMessages, sendMessages } from "../api/Chat";

//:: Import CSS
import chatStyles from "../../assets/styles/chat";

export default function Messages({ route }) {
  const [newMsg, setNewMsg] = useState(null);
  const [msg, setMsg] = useState(null);
  const navigation = useNavigation();
  if (!route.params) {
    return <Text>{navigation.navigate("NewChat")}</Text>;
  }

  const { chatId, chatPseudo } = route.params;
  const scrollViewRef = useRef();
  const fetchMessages = async () => {
    setMsg(await getMessages(chatId));
  };

  const sender = (chatId, body) => {
    sendMessages(chatId, body);
    setNewMsg("");
    setTimeout(() => {
      fetchMessages();
    }, 1000);
  };

  useEffect(() => {
    console.log("Re");
    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  useEffect(() => {
    const reMsg = setInterval(() => {
      fetchMessages();
      console.log("Fetching messageeeeees");
    }, 10000);
    return () => clearInterval(reMsg);
  }, [chatId]);

  return (
    <View style={chatStyles.container}>
      <Nav title={JSON.stringify(chatPseudo)} />
      <View style={chatStyles.box}>
        {msg ? (
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          >
            {msg.map((message, index) => (
              <View key={index}>
                <Text
                  style={
                    message.user.pseudo == chatPseudo
                      ? chatStyles.msgSender
                      : chatStyles.msgSenderMe
                  }
                >
                  {message.user.pseudo}
                </Text>
                <View
                  style={
                    message.user.pseudo == chatPseudo
                      ? chatStyles.msgContainerFriend
                      : chatStyles.msgContainer
                  }
                >
                  <Text>{message.body}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View></View>
        )}
      </View>
      <View style={chatStyles.inputBox}>
        <TextInput
          style={chatStyles.input}
          onChangeText={(value) => setNewMsg(value)}
          placeholder="Aa..."
          value={newMsg}
        />
        <TouchableOpacity
          style={chatStyles.btn}
          value={newMsg}
          onPress={() => {
            newMsg ? sender(chatId, newMsg) : "";
          }}
        >
          <Text style={chatStyles.textBtn}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
