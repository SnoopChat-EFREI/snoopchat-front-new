import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { registerUser } from "../api/authorisation";
import styles from "../../assets/styles/styles";

export default function RegForm() {
  const [pseudo, setPseudo] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          registerUser(firstName, lastName, pseudo, mail, pwd);
        }}
      >
        <Text style={styles.H2}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}
