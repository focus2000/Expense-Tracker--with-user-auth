import React, {useState,useContext} from 'react';
import {TransactionContext} from '../context/TransactionContext';

import addTransaction from '../css/addTransaction.css';

const AddTransaction = () => {
    const [text, setText]= useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(TransactionContext);

    const onSubmit = (e) =>{
        e.preventDefault();

        const newTransaction = {
           
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
         addTransaction({
             text :'',
             amount:""
         });
        
        
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type ="text" value={text} onChange={(e) =>setText(e.target.value)} className="text" placeholder="Enter Text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/> (negative - expense, positive - income)</label>

                    <input type="number" value={amount} onChange={(e) => setAmount (e.target.value)}className="amount" placeholder="Enter amount..."/>
                </div>
                <button className ="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
