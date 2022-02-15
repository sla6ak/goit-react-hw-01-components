import ProfileCity from './ProfileCity/ProfileCity';
import mans from '../objects/user.json';
import style from './App.module.css';
import StatisticList from './Statistics/StatisticList';
import statisticaBack from '../objects/statisticaBack.json';
import FrendList from './FrendList/FrendList';
import frends from '../objects/frends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../objects/transaction-history.json';

const App = () => {
  return (
    <div>
      <ProfileCity className={style.work} users={mans} />
      <StatisticList className={style.work} statisticaBack={statisticaBack} />
      <FrendList className={style.work} frends={frends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
export default App;
