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
    const payload = await getMyPosition();
    setPos(JSON.parse(payload.data.coordonate));
    if (payload.friendList) {
      const friendCoordinate = [];
      for (let i = 0; i < payload.friendList.length - 1; i++) {
        /*const coordIt = JSON.parse(
          payload.friendList[0].user[i].geolocalisation.coordonate
        );
        if (
          pos.latitude !== coordIt.latitude ||
          pos.location !== coordIt.location
        ) {
        } */
        friendCoordinate.push({
          pseudo: payload.friendList[0].user[i].pseudo,
          coordinate: JSON.parse(
            payload.friendList[0].user[i].geolocalisation.coordonate
          ),
        });
      }
      setFriendsPos(friendCoordinate);
    }
  }

  React.useEffect(() => {
    getPos();
  }, []);

  if (pos && pos != "") {
    return (
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          region={{
            latitude: pos.latitude,
            longitude: pos.location,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}
        >
          <Marker
            title="Moi"
            coordinate={{
              latitude: pos.latitude,
              longitude: pos.location,
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
                  latitude: marker.coordinate.latitude,
                  longitude: marker.coordinate.location,
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
