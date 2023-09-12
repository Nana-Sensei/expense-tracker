import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';

const Budget = () => {

  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item)=>{
      return (total = total + item.amount);
  }, 0) 

  return (
    <>
      <div className="budget-col">
      <h3 className="budget-h2">Budget</h3>
        <div className="alert-budget">
          <span>Budget: GHS {budget}</span>
          <button className="budget-edit-btn">Edit</button>
        </div>

        <div className="alert-rem">
          <span>Remaining: GHS {budget - totalExpenses}</span>
        </div>

        <div className="alert-spent">
          <span>Spent: GHS {totalExpenses}</span>
        </div>
      </div>

    </>
  )
}

export default Budget;