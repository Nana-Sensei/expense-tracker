import React, {useContext} from 'react';
import { BiEdit, BiXCircle } from 'react-icons/bi';
import { AppContext } from '../Context/AppContext';

const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext);

  const handleDelete =()=>{
    dispatch({
      type:'DELETE_EXPENSE',
      payload: props.id
    });
  }

  return (
    <tr >
      <td style={{paddingLeft:"60px",}}>{props.date}</td>
      <td>{props.item}</td>
      <td>{props.amount}</td>
      <td className="category-badge">
        {props.category}
      </td>
      <td>
        <BiEdit
          style={{
            fontSize: "26px",
            color: "white",
            backgroundColor: "#3db998",
            border: "none", borderRadius: "3px",
            marginRight: "7px",
            alignItems: "center",
            padding: "4px"
          }} />

        <BiXCircle onClick={handleDelete}
          style={{
            fontSize: "26px",
            color: "white",
            backgroundColor: "#3db998",
            border: "none", borderRadius: "3px",
            marginRight: "7px",
            alignItems: "center",
            padding: "4px"
          }} />
      </td>
    </tr>
  )
}

export default ExpenseItem;