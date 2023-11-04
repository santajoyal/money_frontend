import { ListItemText, ListItem, styled, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const List = styled(ListItem)`
  display: flex;
  margin-top: 10px;
  border: 1px solid #f6f6f6;
`;

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount >= 0 ? "₹" : "₹-";
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount >= 0 ? "#F25252" : "#A68A56";

  return (
    <List style={{ background: `${color}`, color: "#fff" }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction._id)} />
      </ListItemIcon>
      <ListItemText primary={transaction.title} />
      <ListItemText primary={amount} />
    </List>
  );
};

export default Transaction;
