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
        {dataTrans.map(({ id, type, amount, currency }) => (
          <tr className={css.trclass} key={id}>
            <td className={css.tdclass}>{type}</td>
            <td className={css.tdclass}>{amount}</td>
            <td className={css.tdclass}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
