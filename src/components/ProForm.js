import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { registerUser, fetchOneUser } from "../api/authorisation";

import styles from "../../assets/styles/styles";
import profileStyles from "../../assets/styles/profile";
import { backarrow } from "../../assets/images.json";

import PseudoContext from "../utils/PseudoContext";

export default function Proform({ changeProfileStatus }) {
  const [pseudo, setUsername] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const { setPseudo } = React.useContext(PseudoContext);

  async function getOneUser() {
    await Items(await fetchOneUser());
  }

  async function Items(item) {
    const { eMail, firstName, lastName, pseudo } = item;
    setPseudo(pseudo);
    setUsername(pseudo);
    setPrenom(firstName);
    setNom(lastName);
    setMail(eMail);
  }

  React.useEffect(() => {
    getOneUser();
  }, []);

  return (
    <View style={profileStyles.profileContainerForm}>
      <TouchableOpacity
        style={profileStyles.btnForm}
        onPress={() => changeProfileStatus(false)}
      >
        <Image
          style={{ width: 28, height: 28, tintColor: "white" }}
          source={{ uri: backarrow }}
          resizeMode="contain"
        />
        <Text style={profileStyles.textBtnForm}>Revenir à mon profile</Text>
      </TouchableOpacity>
      <Text style={profileStyles.labelInput}>PSEUDO</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudonyme"
        onChangeText={(value) => setPseudo(value)}
        value={pseudo}
      />
      <Text style={profileStyles.labelInput}>Prénom</Text>
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(value) => setPrenom(value)}
        value={prenom}
      />
      <Text style={profileStyles.labelInput}>Nom</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(value) => setNom(value)}
        value={nom}
      />
      <Text style={profileStyles.labelInput}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => setMail(value)}
        value={mail}
      />
      <Text style={profileStyles.labelInput}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(value) => setPwd(value)}
        value={pwd}
      />
      <TouchableOpacity
        style={profileStyles.btnForm}
        onPress={() => {
          registerUser(prenom, nom, pseudo, mail, pwd);
        }}
      >
        <Text style={profileStyles.textBtnForm}>VALIDER</Text>
      </TouchableOpacity>
    </View>
  );
}
