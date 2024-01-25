import userData from '../userData.json';
import userFriends from '../userFrineds.json';
import userTransiction from '../userTransiction.json'

console.log(userTransiction);

import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile data={userData} />
      <FriendList userList={userFriends} />
      <TransactionHistory dataTrans={userTransiction}/>
    </>
  );
};
