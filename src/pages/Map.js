import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { getMyPosition } from "../api/geolocalisation";

import styles from "../../assets/styles/styles";
import { usermarker, friendmarker } from "../../assets/images.json";

export default function Map() {
  const [pos, setPos] = React.useState("");
  const [friendsPos, setFriendsPos] = React.useState([]);

  async function getPos() {
    setPos(await getMyPosition());
  }
  async function getFriendsPos() {
    setFriendsPos([
      {
        pseudo: "adrien",
        coordonate: { latitude: 48.751729, location: 2.300368 },
      },
      {
        pseudo: "slame",
        coordonate: { latitude: 38.73, location: 68.73 },
      },
      {
        pseudo: "paul",
        coordonate: { latitude: 58.73, location: 38.73 },
      },
    ]);
  }

  React.useEffect(() => {
    getPos();
    getFriendsPos();
  }, []);
  console.log("::POS ->  ", pos);

  if (pos && pos != "") {
    const coordinate = JSON.parse(pos);
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
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.location,
            }}
            anchor={{ x: 0.5, y: 1 }}
          >
            <Image
              source={{ uri: usermarker }}
              style={{ width: 26, height: 28 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </Marker>
          {friendsPos ? (
            friendsPos.map((marker, index) => (
              <Marker
                key={index}
                title={marker.pseudo}
                coordinate={{
                  latitude: marker.coordonate.latitude,
                  longitude: marker.coordonate.location,
                }}
                anchor={{ x: 0.5, y: 1 }}
              >
                <Image
                  source={{ uri: friendmarker }}
                  style={{ width: 26, height: 28 }}
                  resizeMode="contain"
                />
              </Marker>
            ))
          ) : (
            <Text></Text>
          )}
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
