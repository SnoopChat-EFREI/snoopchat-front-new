import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { getMyPosition } from "../api/geolocalisation";

import styles from "../../assets/styles/styles";
import { usermarker } from "../../assets/images.json";

export default function Map() {
  const [pos, setPos] = React.useState("");

  async function getPos() {
    setPos(await getMyPosition());
  }

  React.useEffect(() => {
    getPos();
  }, []);
  console.log("::POS ->  ", pos);

  if (pos && pos != "") {
    const coordinate = JSON.parse(pos);
    console.log(coordinate);
    return (
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          region={{
            latitude: coordinate.latitude,
            longitude: coordinate.location,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}
        >
          <Marker
            title="Moi"
            image={{ uri: usermarker }}
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.location,
            }}
          />
        </MapView>
      </View>
    );
  }

  return (
    <View style={styles.containerMap}>
      <MapView
        style={styles.map}
        region={{
          latitude: 48.86551569371716,
          longitude: 2.3385032353388784,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}
      >
        <Marker
          title={"default ping"}
          coordinate={{
            latitude: 48.86551569371716,
            longitude: 2.3385032353388784,
          }}
        ></Marker>
      </MapView>
    </View>
  );
}

const marker = StyleSheet.create({
  marker: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
});
