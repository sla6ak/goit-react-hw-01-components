import styles from './FrendList.module.css';
import Frend from '../Frend/Frend';
import propTypes from 'prop-types';

const FrendList = ({ frends }) => {
  return (
    <div className={styles.conteiner}>
      <ul className={styles.friendList}>
        {frends.map(frend => (
          <li className={styles.item} key={frend.id}>
            <Frend
              avatar={frend.avatar}
              isOnline={frend.isOnline}
              name={frend.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
FrendList.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};
export default FrendList;
