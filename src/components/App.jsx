import ProfileCity from './ProfileCity';
import mans from '../objects/user.json';

export const App = () => {
  return (
    <div>
      <ProfileCity users={mans} />
    </div>
  );
};
