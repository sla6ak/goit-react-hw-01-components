import ProfileCity from './ProfileCity/ProfileCity';
import mans from '../objects/user.json';
import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.conteiner}>
      <ProfileCity users={mans} />
    </div>
  );
};
