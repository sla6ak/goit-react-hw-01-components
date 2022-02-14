import Profile from './Profile';
import PropTypes from 'prop-types';

const ProfileCity = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.tag}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </li>
      ))}
    </ul>
  );
};

ProfileCity.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string.isRequired })
  ),
};
export default ProfileCity;
