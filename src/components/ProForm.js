import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { registerUser, fetchOneUser } from "../api/authorisation";

import styles from "../../assets/styles/styles";

export default function Proform() {
  const [pseudo, setPseudo] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  async function getOneUser() {
    await Items(await fetchOneUser());
  }

  async function Items(item) {
    const { eMail, firstName, lastName, pseudo } = item;
    console.log(item);
    setPseudo(pseudo);
    setPrenom(firstName);
    setNom(lastName);
    setMail(eMail);
  }

  React.useEffect(() => {
    getOneUser();
  }, []);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Pseudonyme"
        onChangeText={(value) => setPseudo(value)}
        value={pseudo}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(value) => setPrenom(value)}
        value={prenom}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(value) => setNom(value)}
        value={nom}
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
          registerUser(prenom, nom, pseudo, mail, pwd);
        }}
      >
        <Text style={styles.H2}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
