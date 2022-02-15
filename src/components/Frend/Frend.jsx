import style from './Frend.module.css';
const Frend = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.item}>
      <span
        className={style.isOnline}
        style={{ backgroundColor: '#8c8' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};
export default Frend;
