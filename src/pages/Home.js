import React, { useState, useEffect } from "react";
import { View } from "react-native";
import NavBar from "../components/NavChat";
import {
  geolocalisationPermissions,
  geolocalisation,
} from "../utils/geolocalisation";

import styles from "../../assets/styles/styles";

export default function Home() {
  const [loc, setLoc] = useState(false);

  useEffect(() => {
    setLocPermissions();
  }, []);

  async function setLocPermissions() {
    setLoc(await geolocalisationPermissions());
  }

  if (loc) {
    geolocalisation();
  }

  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  );
}
