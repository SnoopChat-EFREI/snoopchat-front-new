import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import NavBar from "../components/NavChat";

//:: CSS imports
import styles from "../../assets/styles/styles";
import homeStyles from "../../assets/styles/home";

import { fetchOneChat } from "../api/Chat";

export default function Home() {
  const [chats, setChats] = useState(null);

  async function getOneChat() {
    setChats(await fetchOneChat());
  }

  useEffect(() => {
    getOneChat();
  }, []);
  console.log(chats);
  return (
    <View style={styles.homeContainer}>
      <NavBar />
      {chats ? (
        <View style={homeStyles.box}>
          <ScrollView>
            {chats.map((chat, index) => (
              <TouchableOpacity key={index} style={homeStyles.itemChat}>
                <View style={homeStyles.msgBox}>
                  <Text style={homeStyles.nbItem}>{index + 1}</Text>
                  <Text style={homeStyles.textItem}>
                    {chat.utilisateurs.pseudo}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text>Aucune discussion en cours</Text>
      )}
    </View>
  );
}
