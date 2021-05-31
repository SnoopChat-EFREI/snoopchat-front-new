export default function initFriends(friendsNotInit) {
  let userId = friendsNotInit.id;
  let friendsArray = [];
  friendsNotInit.friend.user.forEach((row) => {
    if (userId !== row.id) {
      friendsArray.push(row);
    }
  });
  return friendsArray;
}
