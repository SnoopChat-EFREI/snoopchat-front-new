import React, { useState, useContext, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

//:: Import CSS
import styles from "../../assets/styles/styles";

//:: utils import
import AuthContext from "../utils/connection.context";
import TokenContext from "../utils/token.context";

//:: API imports
import { login } from "../api/authorisation";

export default function Conform() {
  const [pseudo, setPseudo] = useState("");
  const [pwd, setPwd] = useState("");
  const [handleClick, setHandler] = useState(false);

  const { setAuth } = useContext(AuthContext);
  const { setToken } = useContext(TokenContext);

  return (
    <View>
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
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          setHandler(true);
          const res = await login(pseudo, pwd);
          if (res) {
            setAuth(true);
            setToken(res);
          } else {
            setAuth(false);
            setToken(null);
            setHandler(false);
          }
        }}
      >
        <Text style={styles.H2}>
          {" "}
          {!handleClick ? "Se connecter" : "Connexion en cours..."}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
