import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function connectMembersChat(members) {
  try {
    const token = await AsyncStorage.getItem("@token");

    const chatCreated = await fetchOneChat();
    for (let i = 0; i < chatCreated.length; i++) {
      if (chatCreated[i].utilisateurs.id == members) {
        return false;
      }
    }
    const response = await axios.post(
      `https://snoopchat.herokuapp.com/api/chats`,
      {
        members,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
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

export async function getMessages(id) {
  try {
    const token = await AsyncStorage.getItem("@token");
    const response = await axios.get(
      `https://snoopchat.herokuapp.com/api/messages/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const { message } = response.data.data;
    return message;
  } catch (error) {
    console.log("::ERROR GET MSG ", error);
  }
}

export async function sendMessages(id, body) {
  try {
    const token = await AsyncStorage.getItem("@token");
    const response = await axios.post(
      `https://snoopchat.herokuapp.com/api/messages/`,
      {
        chatId: id,
        body,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    /*const { chats } = response.data.data;
    return chats; */
  } catch (error) {
    console.log("::ERROR SEND MSG ", error);
  }
}
