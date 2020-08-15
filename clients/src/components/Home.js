import React, { useEffect,useContext} from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import UserContext from '../context/UserContext';
import {useHistory} from 'react-router-dom';

import home from '../css/home.css';



import {TransactionProvider} from '../context/TransactionContext';


const Home = () => {

  const {userData} = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if(!userData.user) history.push("/login");
  }, [userData]);
  
    return (
      
          <div className ="body">
          <Header/>
          <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
          </div>
          </div>
       
      );
}

export default Home
