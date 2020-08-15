import React, {useContext, useEffect} from 'react';
import {TransactionContext} from '../context/TransactionContext';
import Transaction from './Transaction';
import transactionList from '../css/transactionList.css';


const TransactionList = () => {
    const {transactions, getTransactions} = useContext(TransactionContext);

    useEffect(() =>{
        getTransactions();
    }, [])
    
    return (
        <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction =>(<Transaction transaction={transaction} key={transaction._id}/> ))}
           
        </ul>
            
        </>
    )
}

export default TransactionList
