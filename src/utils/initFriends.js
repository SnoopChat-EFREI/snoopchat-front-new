export default function initFriends(friendsNotInit) {
  let userId = friendsNotInit.id;
  let friendsArray = [];

  friendsNotInit.friends.forEach((row) => {
    row.user.forEach((row1) => {
      if (userId !== row1.id) {
        friendsArray.push(row1);
      }
    });
  });
  return friendsArray;
}
