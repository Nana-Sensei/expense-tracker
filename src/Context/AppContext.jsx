import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";



const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: [state.expenses.filter((expense)=>
          expense.id !== action.payload
        )]

      };

      default: 
        return state;

  }
}

const initialState = {
  budget: 45000,

  expenses: [
    {
      date:"2/7/2023",
      id: uuid(),
      item:"Social media ads",
      amount:2000,
      category:"Marketing/Publicity"
    },

    // {
    //   id: uuid(),
    //   item:"LED Panels",
    //   amount:4000,
    //   category:"Logistics"
    // },
  ]

}

export const AppContext = createContext();


export const AppProvider =(props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<AppContext.Provider value={{
    budget: state.budget,
    expenses: state.expenses,
    dispatch,
  }}>

    {props.children}

  </AppContext.Provider>)

};