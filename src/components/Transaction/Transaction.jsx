import styles from './Transaction.module.css';

const Transaction = ({ currency, amount, type, isGrey }) => {
  console.log(isGrey);
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

export default Transaction;
