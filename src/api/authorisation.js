import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function login(username, password, bool) {
  try {
    const response = await axios.post(` http://dd21fdce1e14.ngrok.io/login`, {
      username,
      password,
    });
    console.log(response);
    const { token } = response.data;
    await AsyncStorage.setItem("@token", token);
    return token;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function registerUser(
  firstName,
  lastName,
  pseudo,
  eMail,
  password
) {
  try {
    const response = await axios.post(
      ` https://snoopchat.herokuapp.com/register`,
      {
        firstName,
        lastName,
        pseudo,
        eMail,
        password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchOneUser() {
  try {
    const token = await AsyncStorage.getItem("@token");

    const response = await axios.get(
      ` https://snoopchat.herokuapp.com/api/users/one`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const { userFind } = response.data.data;
    // console.log("MON Vié ", userFind);
    return userFind;
  } catch (error) {
    console.log(error);
  }
}

export async function addFriend(pseudo) {
  try {
    const token = await AsyncStorage.getItem("@token");
    console.log(pseudo);
    const response = await axios.get(
      ` https://snoopchat.herokuapp.com/api/friends/addfriend/${pseudo}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response);
    const addFriendResponse = response.status;

    return addFriendResponse;
  } catch (error) {
    console.log(error);
  }
}
