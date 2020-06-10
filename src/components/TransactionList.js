import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from "../context/GlobalState"

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
                <ul id="list" className="list">
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}  
                </ul>
        </>
    )
}

//Map of transactions: we're bringing it down from the global state (globalcontext). For each one we're going to render a transaction component, and we're passing in a prop. 
//because the prop transaction is a list (look at initialState in globalcontext), we need to  use a key and for that key we need to use an id, because it needs to be unique. 