import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { registerUser } from "../api/authorisation";

import styles from "../../assets/styles/styles";
import Constyles from "../../assets/styles/auth.page";

export default function RegForm() {
  const [pseudo, setPseudo] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.H1}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Pseudonyme"
        onChangeText={(value) => setPseudo(value)}
        value={pseudo}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(value) => setLastName(value)}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => setMail(value)}
        value={mail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(value) => setPwd(value)}
        value={pwd}
      />
      <View style={styles.connectPage}>
        <TouchableOpacity
          style={Constyles.button}
          onPress={() => {
            registerUser(firstName, lastName, pseudo, mail, pwd) ? (
              navigation.navigate("Connexion")
            ) : (
              <Text>Impossible de créer un compte avec ce pseudo/Email</Text>
            );
          }}
        >
          <Text style={Constyles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
