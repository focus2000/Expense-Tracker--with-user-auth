import React, {useContext} from 'react';
import {TransactionContext} from '../context/TransactionContext';
import {numberWithCommas} from '../utils/format';

import transaction from '../css/transaction.css';


const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(TransactionContext)
    const sign = transaction.amount <0 ? '-' :'+';
    return (
        
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}<span>
                    {sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
                    <button onClick ={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
            </li>
        
    )
}

export default Transaction
