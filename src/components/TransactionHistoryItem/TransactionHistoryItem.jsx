import css from "./TransactionHistoryItem.module.css"

export const TransactionHistoryItem = ({ items: { type, amount, currency } }) => {
    return (
      <tr className={css.trclass}>
        <td className={css.tdclass}>{type}</td>
        <td className={css.tdclass}>{amount}</td>
        <td className={css.tdclass}>{currency}</td>
      </tr>
    );
};