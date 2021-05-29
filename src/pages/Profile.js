import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

//:: Components imports
import Nav from "../components/Nav";
import ProForm from "../components/ProForm";
import { destroyToken } from "../utils/token.logic";

import { logo, friends, logout, trash } from "../../assets/images.json";
import styles from "../../assets/styles/styles";

export default function Profile() {
  const navigation = useNavigation();
  const [pseudo, setPseudo] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const title = "Profile";

  return (
    <View style={styles.container2}>
      <Nav title={title} />
      <QRCode
        value="Guigui le bg"
        logo={{ uri: logo }}
        logoSize={20}
        logoBackgroundColor="#00B2FF"
      />
      <Text></Text>
      <Text style={styles.H2}>GuiguiBoy</Text>
      <Text></Text>
      <ScrollView>
        <ProForm />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Friends")}
        >
          <Image
            source={{ uri: friends }}
            style={{ position: "absolute", width: 25, height: 25, left: 30 }}
          />
          <Text style={styles.H2}>Ajouter des amis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (destroyToken()) {
              navigation.navigate("connection");
            }
          }}
        >
          <Image
            source={{ uri: logout }}
            style={{ position: "absolute", width: 25, height: 25, left: 30 }}
          />
          <Text style={styles.H2ROUGE}>Déconnexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: trash }}
            style={{ position: "absolute", width: 25, height: 25, left: 30 }}
          />
          <Text style={styles.H2ROUGE}>Supprimer le compte</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
