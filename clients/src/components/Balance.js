import React, {useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext';
import {numberWithCommas} from '../utils/format';

const Balance = () => {
    const {transactions}=useContext(TransactionContext);
    const amounts = transactions.map(transaction =>transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc += item),0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </div>
    )
}

export default Balance
