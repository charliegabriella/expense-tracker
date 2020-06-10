import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                    <p className="money-plus" className="money plus">+€0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                    <p className="money-minus" className="money minus">-€0.00</p>
            </div>
        </div>
    )
}
