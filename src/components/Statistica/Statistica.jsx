import style from './Statistica.module.css';

const Statistica = ({ label, percentage }) => {
  return (
    <div className={style.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </div>
  );
};

export default Statistica;
