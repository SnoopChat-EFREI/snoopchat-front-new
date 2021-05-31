import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

//:: Components imports
import Nav from "../components/Nav";
import ProForm from "../components/ProForm";

//:: utils imports
import { destroyToken } from "../utils/token.logic";
import AuthContext from "../utils/connection.context";
import { fetchOneUser } from "../api/authorisation";

//:: CSS imports
import {
  logo,
  friends,
  logout,
  trash,
  friendlist,
} from "../../assets/images.json";
import styles from "../../assets/styles/styles";
import profileStyles from "../../assets/styles/profile";

import PseudoContext from "../utils/PseudoContext";

export default function Profile() {
  const [pseudo, setPseudo] = React.useState("");
  const [changeProfile, setChangePro] = React.useState(false);

  const navigation = useNavigation();
  const title = "Profile";
  const { setAuth } = useContext(AuthContext);
  const contextValue = {
    pseudo,
    setPseudo,
  };
  async function getOneUser() {
    const userData = await await fetchOneUser();
    setPseudo(userData.pseudo);
  }
  useEffect(() => {
    getOneUser();
  }, []);
  console.log(pseudo);
  return (
    <View style={profileStyles.profileContainer}>
      <Nav title={title} />
      <View style={profileStyles.profileBox}>
        {pseudo ? (
          <View>
            <QRCode
              value={pseudo ? pseudo : "loading..."}
              logo={{ uri: logo }}
              logoSize={20}
              logoBackgroundColor="#00B2FF"
            />
            <Text style={styles.H2}>{pseudo}</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color="red"></ActivityIndicator>
        )}
      </View>
      <View>
        <TouchableOpacity
          style={profileStyles.button}
          onPress={() => setChangePro(!changeProfile)}
        >
          <Text style={profileStyles.textButton}>
            Modifier mes informations
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          changeProfile
            ? profileStyles.profileBoxForm
            : profileStyles.profileBox
        }
      >
        <View style={profileStyles.buttonList}>
          <ScrollView>
            {changeProfile ? (
              <PseudoContext.Provider value={contextValue}>
                <ProForm changeProfileStatus={setChangePro} />
              </PseudoContext.Provider>
            ) : (
              <View>
                <TouchableOpacity
                  style={profileStyles.buttonProfile}
                  onPress={() => navigation.navigate("FriendScan")}
                >
                  <Image
                    source={{ uri: friends }}
                    resizeMode="contain"
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={profileStyles.buttonText}>Ajouter des amis</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={profileStyles.buttonProfile}
                  onPress={() => navigation.navigate("FriendList")}
                >
                  <Image
                    source={{ uri: friendlist }}
                    resizeMode="contain"
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={profileStyles.buttonText}>Liste des Amis</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={profileStyles.buttonProfile}
                  onPress={() => {
                    if (destroyToken()) {
                      setAuth(false);
                    }
                  }}
                >
                  <Image
                    source={{ uri: logout }}
                    resizeMode="contain"
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={profileStyles.buttonText}>Déconnexion</Text>
                </TouchableOpacity>
                {/*         <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: trash }}
            style={{ position: "absolute", width: 25, height: 25, left: 30 }}
          />
          <Text style={styles.H2alert}>Supprimer le compte</Text>
        </TouchableOpacity> */}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
