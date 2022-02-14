import propTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = props => {
  const { stats, location, username, tag, avatar } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.nambers}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={styles.nambers}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={styles.nambers}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  stats: propTypes.objectOf(propTypes.number),
  location: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};

export default Profile;
