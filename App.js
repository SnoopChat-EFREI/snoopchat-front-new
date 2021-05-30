import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//:: Pages imports
import Connection from "./src/pages/Connection";
import Register from "./src/pages/Register";
import Home from "./src/pages/Home";
import Map from "./src/pages/Map";
import Profile from "./src/pages/Profile";
import Friends from "./src/pages/Friends";
import FriendScan from "./src/pages/FriendScan";
import NewChat from "./src/pages/NewChat";
import FriendList from "./src/pages/FriendList";

//:: Context import
import AuthContext from "./src/utils/connection.context";
import TokenContext from "./src/utils/token.context";
import {
  geolocalisationPermissions,
  geolocalisation,
} from "./src/utils/geolocalisation";
import styles from "./assets/styles/styles";

//:: Navigation components init
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const container = () => {
  return (
    <Drawer.Navigator initialRouteName="Chat">
      <Drawer.Screen name="Chat" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Friends" component={Friends} />
      <Drawer.Screen name="FriendScan" component={FriendScan} />
      <Drawer.Screen name="NewChat" component={NewChat} />
      <Drawer.Screen name="FriendList" component={FriendList} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [authentication, setAuth] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [loc, setLoc] = useState(false);

  async function setLocPermissions() {
    setLoc(await geolocalisationPermissions());
  }

  useEffect(() => {
    setLocPermissions();
  }, [authentication]);

  if (loc) {
    geolocalisation();
  }

  //:: Context value init
  const AuthContextValue = {
    authentication,
    setAuth,
  };

  const TokenContextValue = {
    token,
    setToken,
  };

  if (authentication) {
    return (
      <NavigationContainer>
        <TokenContext.Provider value={TokenContextValue}>
          <AuthContext.Provider value={AuthContextValue}>
            <Tab.Navigator
              tabBarOptions={{ style: styles.bottomNav }}
              initialRouteName={"Home"}
            >
              <Tab.Screen name="Home" component={container} />
              <Tab.Screen name="Map" component={Map} />
            </Tab.Navigator>
          </AuthContext.Provider>
        </TokenContext.Provider>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthContext.Provider value={AuthContextValue}>
          <Tab.Navigator tabBarOptions={{ style: { display: "none" } }}>
            <Tab.Screen name="Login" component={Connection} />
            <Tab.Screen name="Register" component={Register} />
          </Tab.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    );
  }
}
