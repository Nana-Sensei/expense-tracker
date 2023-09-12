import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./Components/Budget";
import ExpenseList from './Components/ExpenseList';
import AddExpense from './Components/AddExpense';
import { AppProvider } from './Context/AppContext';


const App = () => {
  return (
    <AppProvider>
      <div className="container">

        <div className="row">
          <div className="col-lg form-col">
            <AddExpense />
          </div>
          <div className="col-sm">
            <Budget />
          </div>
        </div>

        <div>
          <ExpenseList />
        </div>

      </div>
    </AppProvider>
  )
}


export default App;