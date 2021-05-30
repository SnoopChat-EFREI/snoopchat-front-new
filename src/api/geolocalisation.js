import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const getToken = async () => {
  return await AsyncStorage.getItem("@token");
};

export async function sendPosition(location) {
  try {
    const token = await getToken();
    const response = await axios.put(
      `https://snoopchat.herokuapp.com/api/geolocalisations/`,
      {
        coordonate: location,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    // console.log(response);

    return response.status;
  } catch (error) {
    console.log(error);
  }
}

export async function getMyPosition() {
  try {
    const token = await getToken();
    const response = await axios.get(
      `https://snoopchat.herokuapp.com/api/geolocalisations/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(
      "::// OUEEEEEEE-------------------------------------6> ",
      response.data.data
    );
    const { coordonate } = response.data.data;
    return coordonate;
  } catch (error) {
    console.log(error);
  }
}
