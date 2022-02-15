import styles from './TransactionHistory.module.css';
import Transaction from 'components/Transaction/Transaction';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.transactionHeader}>
        <tr className={styles.transactionHeaderBox}>
          <th className={styles.transactionHeaderEl}>Type</th>
          <th className={styles.transactionHeaderEl}>Amount</th>
          <th className={styles.transactionHeaderEl}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.transactionBody}>
        {transactions.map((transaction, id) => {
          let variable = false;
          if (id % 2) {
            variable = true;
          }
          return (
            <Transaction
              isGrey={variable}
              currency={transaction.currency}
              type={transaction.type}
              amount={transaction.amount}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
