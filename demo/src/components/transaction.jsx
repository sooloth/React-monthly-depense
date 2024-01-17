import Item from "./item"
import './transaction.css'
import DataContext from '../data/DataContext'
import {useContext} from "react"
const Transaction = (props) => {
  const {items} = props
  // const name = useContext(DataContext)
    return (
     <div>
        <ul className="item">
          {items.map((element)=>{
          return <Item {...element} key={element.id}/>//spread operator
        })}
      </ul>
      {/* {name} */}
     
     </div>
    );
  };
export default Transaction;