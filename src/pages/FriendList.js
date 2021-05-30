import * as React from "react";
import { Text, View, ScrollView } from "react-native";

import Nav from "../components/Nav";

//:: CSS import
import styles from "../../assets/styles/styles";
import friendStyles from "../../assets/styles/friends";

import { fetchOneUser } from "../api/authorisation";

const FriendList = (props) => {
  const [friends, setFriends] = React.useState([]);

  async function getOneUser() {
    await setFriends(initFriends(await fetchOneUser()));
  }

  React.useEffect(() => {
    getOneUser();
  }, []);

  function initFriends(friendsNotInit) {
    let userId = friendsNotInit.id;
    let friendsArray = [];
    friendsNotInit.friend.user.forEach((row) => {
      if (userId !== row.id) {
        friendsArray.push(row);
      }
    });
    return friendsArray;
  }

  return (
    <View style={styles.container}>
      <Nav title="Liste d'amis" />
      <View style={friendStyles.listBox}>
        <Text style={styles.H2}>{friends.length} AMI(S)</Text>
        <ScrollView>
          {friends.map((item, index) => (
            <View key={index} style={friendStyles.friend}>
              <Text style={{ fontWeight: "bold" }}>
                {index + 1 + " - " + item.pseudo}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FriendList;
