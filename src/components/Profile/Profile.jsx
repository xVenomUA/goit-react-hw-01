import css from './Profile.module.css';
export const Profile = (props) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.image} alt={props.name} className={css.avatar} />
        <p className={css.name}>{props.name}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.liItem}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{props.stats.followers}</span>
        </li>
        <li className={css.liItem}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{props.stats.views}</span>
        </li>
        <li className={css.liItem}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
