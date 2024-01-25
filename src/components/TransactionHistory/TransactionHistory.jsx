import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ dataTrans }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {dataTrans.map(( data ) => (
            <TransactionHistoryItem key={data.id} items={data} />
        ))}
      </tbody>
    </table>
  );
};
