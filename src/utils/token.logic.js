import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem("@token");
    if (token !== null) {
      return token;
    }
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function verifyToken(token) {
  try {
    await axios.get("http://localhost:8080/api/users/verify-token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
