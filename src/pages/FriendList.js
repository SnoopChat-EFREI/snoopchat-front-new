import * as React from "react";
import { Text, View, ScrollView } from "react-native";

import Nav from "../components/Nav";

import styles from "../../assets/styles/styles";

import {fetchOneUser} from "../api/authorisation";

const FriendList = (props) => {
  const [friends, setFriends] = React.useState([]);
  
  async function getOneUser() {
    await setFriends(initFriends(await fetchOneUser()));   
  }

  React.useEffect(()=>{
    getOneUser()
  },[])

  function initFriends(friendsNotInit){
    let userId = friendsNotInit.id
    let friendsArray = []
    friendsNotInit.friend.user.forEach(row => {
      if(userId!==row.id){
        friendsArray.push(row)
      }
    });
    return friendsArray
  }

  return (
    <View style={styles.container}>
      <Nav title="Liste d'amis"/>
        <Text>FriendsList</Text>
        {friends.map((item,index)=>(
          <View style={styles.item}>
            <p>{item.pseudo}</p>
          </View>
        ))}
    </View>
  );
};

export default FriendList;
