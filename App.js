import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
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
import NewChatTo from "./src/pages/NewChatTo";
import FriendList from "./src/pages/FriendList";
import Messages from "./src/pages/Messsages"

//:: Context import
import AuthContext from "./src/utils/connection.context";
import TokenContext from "./src/utils/token.context";
import {
  geolocalisationPermissions,
  geolocalisation,
} from "./src/utils/geolocalisation";

//:: CSS Imports
import { home, navmarker } from "./assets/images.json";
import navStyles from "./assets/styles/app.nav";
import connectionStyles from "./assets/styles/auth.page";

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
      <Drawer.Screen name="NewChatTo" component={NewChatTo} />
      <Drawer.Screen name="FriendList" component={FriendList} />
      <Drawer.Screen name="Messages" component={Messages} />
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
              tabBarOptions={{
                showLabel: false,
                style: connectionStyles.connectionNav,
              }}
              initialRouteName={"Home"}
            >
              <Tab.Screen
                name="Home"
                component={container}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={focused ? navStyles.navFocusBtn : navStyles.navBtn}
                    >
                      <Image
                        style={{ width: 25, height: 25 }}
                        resizeMode="contain"
                        source={{ uri: home }}
                      />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={Map}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={focused ? navStyles.navFocusBtn : navStyles.navBtn}
                    >
                      <Image
                        style={{ width: 25, height: 25 }}
                        resizeMode="contain"
                        source={{ uri: navmarker }}
                      />
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          </AuthContext.Provider>
        </TokenContext.Provider>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthContext.Provider value={AuthContextValue}>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              style: connectionStyles.connectionNav,
            }}
          >
            <Tab.Screen
              name="Connexion"
              component={Connection}
              options={{
                tabBarIcon: () => (
                  <View style={connectionStyles.connectionBox}>
                    <Text style={connectionStyles.navInput}>Connexion</Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Inscription"
              component={Register}
              options={{
                tabBarIcon: () => (
                  <View style={connectionStyles.connectionBox}>
                    <Text style={connectionStyles.navInput}>Inscription</Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    );
  }
}
