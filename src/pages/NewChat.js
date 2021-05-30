import React, { useContext, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

//:: Component import

//:: utils import
import { getToken, verifyToken } from "../utils/token.logic";
import AuthContext from "../utils/connection.context";
import TokenContext from "../utils/token.context";

//:: Import CSS
import styles from "../../assets/styles/styles";
import { logo } from "../../assets/images.json";

export default function NewChat() {
  const { setAuth } = useContext(AuthContext);
  const { setToken } = useContext(TokenContext);

  const fetchToken = async () => {
    const token = await getToken();
    if (token) {
      console.log(await verifyToken(token));
      if (await verifyToken(token)) {
        setAuth(true);
        setToken(token);
      } else {
        setAuth(false);
        setToken(null);
      }
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.H2}>Démarrer une discussion</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
        onChangeText={() => {}}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={() => {}}
      />
    </View>
  );
}
