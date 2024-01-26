import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headTr}>
          <th className={css.someClass}>Type</th>
          <th className={css.someClass}>Amount</th>
          <th className={css.someClass}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.trclass} key={id}>
            <td className={css.someClass}>{type}</td>
            <td className={css.someClass}>{amount}</td>
            <td className={css.someClass}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
