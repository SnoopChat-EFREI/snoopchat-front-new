import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { addFriend } from "../api/authorisation";

import friendStyles from "../../assets/styles/friends";

import Nav from "../components/Nav";

export default function FriendScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [statut, setStatut] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    await setScanned(true);
    console.log(data);
    await setStatut(await addFriend(data));
    if ((await statut) === 201) {
      Alert.alert("Ami ajouté !", `Snoopchater "${data}" ajouté !`);
    } else {
      Alert.alert(
        "Impossible",
        `Impossible d'ajouter le snoopchater "${data}" !`
      );
    }
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={friendStyles.container}>
      <Nav title={"Ajouter des amis"} />
      <View style={friendStyles.box}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={friendStyles.photo}
        />
      </View>
      <TouchableHighlight
        style={friendStyles.btn}
        title={"Tap to Scan Again"}
        onPress={() => {
          setScanned(false);
        }}
      >
        <Text style={friendStyles.buttonText}>SCANNER</Text>
      </TouchableHighlight>
    </View>
  );
}
