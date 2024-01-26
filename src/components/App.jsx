import userData from '../userData.json';
import userFriends from '../userFriends.json';
import userTransiction from '../userTransaction.json'

import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={userFriends} />
      <TransactionHistory items={userTransiction} />
    </>
  );
};
