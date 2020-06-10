import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}€{Math.abs(transaction.amount)}</span> 
             <button className="delete-btn">x</button>
        </li> 
    )
}

//By using Math.abs, the amount is made an absolute number, which will always be positive.