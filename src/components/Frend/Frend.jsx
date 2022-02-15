import style from './Frend.module.css';
const Frend = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.item}>
      <span
        className={style.isOnline}
        style={{ backgroundColor: isOnline ? '#6a6' : '#f77' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};
export default Frend;
