import * as Location from "expo-location";
import { sendPosition } from "../api/geolocalisation";

export async function geolocalisationPermissions() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return false;
  } else return true;
}

export function geolocalisation() {
  setInterval(async () => {
    const location = await Location.getCurrentPositionAsync({});
    const msg = {
      latitude: location.coords.latitude,
      location: location.coords.longitude,
    };
    console.log("Coucou cest la géoloc qui s'actu :p ");
    sendPosition(JSON.stringify(msg));
  }, 30000);
}
