import React, {useContext} from 'react';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { Modal } from 'react-bootstrap';
import { AppContext } from '../Context/AppContext';

const ExpenseList = () => {

  const {expenses} = useContext(AppContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="exp-table">
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          closeModal={handleClose}

        </Modal.Body>

      </Modal>
      <h3 className="expense-list">Expense List</h3>
      <table 
      style={{ width: "1200px", 
      marginLeft: "50px",
      borderRdius: "15px", 
      boxShadow: "3px 3px 10px 3px rgba(11, 20, 39, 0.1)" }} 
      className="table table-hover">
        <thead >
          <tr>
            <th style={{ backgroundColor: "#1a1728", color: "white", paddingLeft:"60px", }} scope="col">Date</th>
            <th style={{ backgroundColor: "#1a1728", color: "white" }} scope="col">Item</th>
            <th style={{ backgroundColor: "#1a1728", color: "white" }} scope="col">Amount</th>
            <th style={{ backgroundColor: "#1a1728", color: "white" }} scope="col">Category</th>
            <th style={{ backgroundColor: "#1a1728", color: "white" }} scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map(((expense) => (
            <ExpenseItem key={expense.id}
              id={expense.id}
              date={expense.date}
              item={expense.item}
              amount={expense.amount}
              category={expense.category} />
          )))}
        </tbody>

      </table>
    </div>
  )
}

export default ExpenseList;

/* <ul>
      {expenses.map(((expense)=>(
        <ExpenseItem 
        id={expense.id}
        item={expense.item}
        amount={expense.amount}
        category={expense.category}/>
      )))}
      </ul> */