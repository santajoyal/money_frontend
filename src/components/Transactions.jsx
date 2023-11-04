import { Typography, List, Divider, styled, Box } from "@mui/material";
import Transaction from "./Transaction";

const Component = styled(Box)`
  & > h5 {
    margin-bottom: 10px;
  }
`;

const HeadingDiv = styled(Box)`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const ListDiv = styled(Box)`
  height: 56vh;
  overflow: hidden;
  overflow-y: scroll;
`;

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <Component>
      <HeadingDiv>
        <Typography variant="h5">Transaction History</Typography>
        <Divider style={{ width: "100%" }} />
      </HeadingDiv>
      <ListDiv>
        <List>
          {transactions.map((transaction) => {
            return (
              <Transaction
                transaction={transaction}
                deleteTransaction={deleteTransaction}
                key={transaction.id}
              />
            );
          })}
        </List>
      </ListDiv>
    </Component>
  );
};

export default Transactions;
