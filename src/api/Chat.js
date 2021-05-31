import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function connectMembersChat(members) {
  try {
    const token = await AsyncStorage.getItem("@token");

    const response = await axios.post(
      `https://snoopchat.herokuapp.com/api/chats`,
      {
        members,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchOneChat() {
    try {
      const token = await AsyncStorage.getItem("@token");
  
      const response = await axios.get(
        `https://snoopchat.herokuapp.com/api/chats/one`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
  
      const { chats } = response.data.data;

      return chats;
    } catch (error) {
      console.log(error);
    }
  }