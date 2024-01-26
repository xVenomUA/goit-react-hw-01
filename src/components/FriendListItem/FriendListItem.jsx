import css from './FriendListItem.module.css';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const status = isOnline ? css.online : css.offline;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.nameListItem}>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
