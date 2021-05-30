import React, { useState, useContext, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const [failure, setFailure] = useState(false);

  const navigation = useNavigation();

  const { setAuth } = useContext(AuthContext);
  const { setToken } = useContext(TokenContext);
  console.log(failure);
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
      {failure ? (
        <Text style={styles.fail}>Il y a un problème avec votre login</Text>
      ) : (
        <Text></Text>
      )}
      <View style={styles.connectPage}>
        <TouchableOpacity
          style={styles.buttonConn}
          onPress={async () => {
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
          }}
        >
          <View>
            <Text style={styles.conn}>
              {!handleClick ? "Se connecter" : "Connexion en cours..."}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonConn}
          onPress={() => navigation.navigate("Register")}
        >
          <View>
            <Text style={styles.conn}>S'inscrire</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
