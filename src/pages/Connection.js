import React, { useContext, useEffect } from "react";
import { View, Image, FlatList } from "react-native";

//:: Component import
import Conform from "../components/ConForm";

//:: utils import
import { getToken, verifyToken } from "../utils/token.logic";
import AuthContext from "../utils/connection.context";
import TokenContext from "../utils/token.context";

//:: Import CSS
import styles from "../../assets/styles/styles";
import { logo } from "../../assets/images.json";

export default function Connection() {
  const { authentication, setAuth } = useContext(AuthContext);
  const { setToken } = useContext(TokenContext);

  const fetchToken = async () => {
    const token = await getToken();
    if (token) {
      console.log(await verifyToken(token));
      if (await verifyToken(token)) {
        setAuth(true);
        setToken(token);
      } else {
        setAuth(false);
        setToken(null);
      }
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: logo }}
        style={{ width: 100, height: 100, top: 1 }}
      />
      <Conform />
    </View>
  );
}
