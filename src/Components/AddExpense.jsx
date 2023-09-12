import React, {useContext} from 'react';
import { useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { v4 as uuid } from 'uuid';


const AddExpense = () => {

  const {dispatch} = useContext(AppContext);


  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const expenses = {
      id: uuid() ,
      date: date,
      item: item,
      amount: parseInt(amount),
      category: category,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenses,
    });

    setItem("");
    setAmount("");
    setCategory("");

  }

  return (
    <div>
      <form className="col-sm-9" onSubmit={handleSubmit}>
        <h3>Add Expense</h3>
        <div className="mb-3">
          <input className="form-control form-line form-top"
            type="text"
            required="required"
            placeholder='Item'
            value={item}
            onChange={(e) => setItem(e.target.value)} />
        </div>

        <div className="mb-3">

          <input
            type="number"
            required="required"
            className="form-control form-line"
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <select 
          className="form-select form-line" 
          aria-label="Default select example" 
          required="required"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          >
            <option className='muted' value="Select">Select category</option>
            <option value="Marketing/Publicity">Marketing/Publicity</option>
            <option value="Logistics">Logistics</option>
            <option value="Personnel">Personnel</option>
            <option value="Venue Branding">Venue Branding</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <button
          style={{ backgroundColor: "#1a1728", border: "none" }}
          type="submit" className="btn btn-primary add-btn">Add</button>
      </form>
    </div>
  )
}

export default AddExpense;