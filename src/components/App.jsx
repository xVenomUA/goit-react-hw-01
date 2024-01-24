import userData from '../userData.json';
import userFriends from '../userFrineds.json';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
export const App = () => {
  return (
    <>
      <Profile data={userData} />
      <FriendList userList={userFriends} />
    </>
  );
};
