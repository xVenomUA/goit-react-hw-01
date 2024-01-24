import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ userList }) => {
    return (
        <ul className={css.friendList}>
        {userList.map(friends => {
         return <li key={friends.id}>
            <FriendListItem listOfFriends={friends} />
          </li>
        })}
      </ul>
  );
};
