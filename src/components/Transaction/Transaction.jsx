import styles from './Transaction.module.css';
import propTypes from 'prop-types';

const Transaction = ({ currency, amount, type, isGrey }) => {
  return (
    <tr
      className={styles.transactionTr}
      style={{ backgroundColor: isGrey ? '#ccc' : '#dde' }}
    >
      <th className={styles.transactionTh}>{type}</th>
      <th className={styles.transactionTh}>{amount}</th>
      <th className={styles.transactionTh}>{currency}</th>
    </tr>
  );
};
Transaction.protoTypes = {
  amount: propTypes.number,
  isGrey: propTypes.bool,
  currency: propTypes.string,
  type: propTypes.string,
};

export default Transaction;
