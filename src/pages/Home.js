import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import NavBar from "../components/NavChat";
import styles from "../../assets/styles/styles";

import {fetchOneChat} from "../api/Chat"

export default function Home() {
  const [chats, setChats] = useState([]);

  async function getOneChat() {
    await setChats(await fetchOneChat());
  }

  useEffect(() => {
    getOneChat();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <NavBar />
      <Text>Aucune discussion en cours</Text>
      {chats.map((row, index)=>(

        <Text>{console.log(row.user)}</Text>
      ))}
    </View>
  );
}
