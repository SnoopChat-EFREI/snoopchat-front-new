import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const getToken = async () => {
  return await AsyncStorage.getItem("@token");
};

export async function sendPosition(location) {
  try {
    const token = await getToken();
    const response = await axios.put(
      ` http://dd21fdce1e14.ngrok.io/api/geolocalisations/`,
      {
        coordonate: location,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.status;
  } catch (error) {
    console.log(error);
  }
}

export async function getMyPosition() {
  try {
    const token = await getToken();
    const response = await axios.get(
      ` http://dd21fdce1e14.ngrok.io/api/geolocalisations/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const friendList = await getFriendsLoc();
    const { data } = response.data;
    const payload = { friendList, data };

    return payload;
  } catch (error) {
    console.log(error);
  }
}

async function getFriendsLoc() {
  try {
    const token = await getToken();
    const response = await axios.get(
      ` http://dd21fdce1e14.ngrok.io/api/users/one/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data.data.userFind.friend.user;
  } catch (error) {
    console.log(error);
  }
}
