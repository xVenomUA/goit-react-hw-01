import css from './Profile.module.css';
export const Profile = ({
  data: { username, tag, location, avatar, stats = { followers: 0, views: 0, likes: 0 } },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.liItem}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.liItem}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.liItem}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
