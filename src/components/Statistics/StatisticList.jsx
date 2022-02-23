import styles from './StatisticList.module.css';
import Statistica from 'components/Statistica/Statistica';
import propTypes from 'prop-types';

const StatisticList = ({ statisticaBack, title }) => {
  function randCol() {
    let r =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() +
      '80';
    return r;
  }
  return (
    <section className={styles.statistics}>
      {title !== '' && <h2 className="title">{title}</h2>}
      <ul className={styles.statisticsBox}>
        {statisticaBack.map(elem => {
          return (
            <li style={{ backgroundColor: randCol() }} key={elem.id}>
              <Statistica percentage={elem.percentage} label={elem.label} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
StatisticList.propTypes = {
  percentage: propTypes.string,
  label: propTypes.number,
  title: propTypes.string,
};

export default StatisticList;
