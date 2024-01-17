import './item.css'
import PropTypes from 'prop-types';
// import DataContext from '../data/DataContext';
// import { useContext } from 'react';
const Item = (props) => {
    const{title,amount} = props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    // const name = useContext(DataContext)
    const formatNumber=(num)=> {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
    return (
      <li className={status}>
        {title}<span>{symbol}{formatNumber(Math.abs(amount))}</span>
       {/* {name}  */}
      </li>
      )
  };
  Item.propTypes={
      title:PropTypes.string.isRequired,
      amount:PropTypes.number.isRequired,
  }
export default Item;