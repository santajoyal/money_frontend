import { useEffect, useState } from "react";
import { Typography, Box, styled } from "@mui/material";
import Balance from "../components/Balance";
import ExpenseCard from "../components/ExpenseCard";
import Transactions from "../components/Transactions";
import NewTransaction from "../components/NewTransaction";
import { piggy } from "../utils/piggy";
import {
  createTransactionRoute,
  getTransactionRoute,
  deleteTransactionRoute,
  storageName,
} from "../utils/APIRoutes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ExpenseContainer = styled(Box)`
  min-width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0d0d0d;

  & > img {
    width: 50%;
    border-radius: 50%;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const Header = styled(Typography)`
  margin: 10px 0;
  text-align: center;
  color: white;
  font-size: 36px;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Component = styled(Box)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  gap: 1rem;
  width: 50%;
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    width: 70%;
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
    padding: 1rem;
    border-radius: 10px;
    flex-direction: column;
  }

  & > div {
    padding-top: 0;
    width: 50%;
    @media only screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

function PiggyTrackers() {
  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem(storageName)) {
      getTransaction();
    } else {
      navigate("/login");
    }
    setIsLoading(false);
  }, []);

  const getTransaction = async () => {
    const { data } = await axios.get(
      `${getTransactionRoute}/63f6532478d019f05c93beb0`
    );

    setTransactions(data);
  };

  const deleteTransaction = async (id) => {
    const { data } = await axios.delete(`${deleteTransactionRoute}/${id}`);
    getTransaction();
  };

  const addTransaction = async (transaction) => {
    const { data } = await axios.post(createTransactionRoute, transaction);
    getTransaction();
  };

  return (
    <>
      {isLoading ? (
        <ExpenseContainer>
          <img src={`${piggy.img}/pic4.gif`} alt="hfjshdfhshjfhsfh" />
        </ExpenseContainer>
      ) : (
        <ExpenseContainer>
          <Header>Expense Tracker</Header>
          <Component>
            <Box>
              <Balance transactions={transactions} />
              <ExpenseCard transactions={transactions} />
              <NewTransaction addTransaction={addTransaction} />
            </Box>
            <Box>
              <Transactions
                transactions={transactions}
                deleteTransaction={deleteTransaction}
              />
            </Box>
          </Component>
        </ExpenseContainer>
      )}
    </>
  );
}

export default PiggyTrackers;
