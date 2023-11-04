import { useState } from "react";
import { Typography, Box, TextField, Button, styled } from "@mui/material";
import { storageName } from "../utils/APIRoutes";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & > div,
  & > button {
    margin-top: 30px;
  }
`;

const BtnContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background: #f27777;
  color: #fff;
  width: 100%;
  &:hover {
    background-color: #f25252;
  }
`;

const NewTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const userId = localStorage.getItem(storageName);

  const incomeTransaction = (e) => {
    const transaction = {
      userId: userId,
      type: "income",
      title: text,
      amount: +amount,
    };
    addTransaction(transaction);

    setText("");
    setAmount("");
  };

  const expenseTransaction = (e) => {
    const transaction = {
      userId: userId,
      type: "expense",
      title: text,
      amount: +-amount,
    };
    addTransaction(transaction);
    setText("");
    setAmount("");
  };
  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        value={text}
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        value={amount}
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <BtnContainer>
        <StyledButton variant="contained" onClick={incomeTransaction}>
          Income
        </StyledButton>

        <StyledButton variant="contained" onClick={expenseTransaction}>
          Expense
        </StyledButton>
      </BtnContainer>
    </Container>
  );
};

export default NewTransaction;
