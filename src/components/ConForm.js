import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Import CSS
import styles from "../../assets/styles/auth.page";

//:: utils import
import AuthContext from "../utils/connection.context";
import TokenContext from "../utils/token.context";

//:: API imports
import { login } from "../api/authorisation";

export default function Conform() {
  const [pseudo, setPseudo] = useState("");
  const [pwd, setPwd] = useState("");
  const [handleClick, setHandler] = useState(false);
  const [failure, setFailure] = useState(false);

  const navigation = useNavigation();

  const { setAuth } = useContext(AuthContext);
  const { setToken } = useContext(TokenContext);

  const send = async () => {
    setHandler(true);
    const res = await login(pseudo, pwd);
    if (res) {
      setAuth(true);
      setToken(res);
    } else {
      setAuth(false);
      setToken(null);
      setFailure(true);
      setHandler(false);
    }
  };

  return (
    <View style={styles.connectionContainer}>
      <View style={styles.connectionInput}>
        <TextInput
          style={styles.input}
          placeholder="Pseudo"
          onChangeText={(value) => setPseudo(value)}
          value={pseudo}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={(value) => setPwd(value)}
          secureTextEntry={true}
          value={pwd}
        />
        <Text style={styles.link}>Mot de passe oublié ?</Text>
      </View>
      <View style={styles.connectionButton}>
        <TouchableOpacity style={styles.button} onPress={() => send()}>
          {!handleClick ? (
            <Text style={styles.buttonText}>SE CONNECTER</Text>
          ) : (
            <ActivityIndicator size="small" color="white" />
          )}
        </TouchableOpacity>
      </View>
      {failure ? (
        <Text style={styles.fail}>Pseudo/Mot de passe invalide</Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
