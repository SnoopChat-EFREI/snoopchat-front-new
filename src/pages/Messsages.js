import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//:: Component import
import Nav from "../components/Nav";

//:: utils import

//:: Import CSS
import styles from "../../assets/styles/styles";

export default function Messages({ route }) {
  const navigation = useNavigation();

  if (route.params) {
    const { chatId, chatPseudo } = route.params;

    return (
      <View style={styles.container}>
          <Nav title={JSON.stringify(chatPseudo)}/>
          <Text>{JSON.stringify(chatId)}</Text>
      </View>
    );
  } else {
    return <Text>{navigation.navigate("NewChat")}</Text>;
  }
}
