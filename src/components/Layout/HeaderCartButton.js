import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import { FiShoppingCart } from "react-icons/fi";
import cartContext from '../../store/CartContext';
import { useEffect,useState } from 'react';
function HeaderCartButton(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const ctx=useContext(cartContext)
  const {items}=ctx

  const numberOfCartItems=items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)
  const btnClass=`${classes.button} ${isHighlighted? classes.bump:''}`;
  useEffect(() => {

    if(items.length===0){
      return;
    }
    setIsHighlighted(true)

    const timer=setTimeout(() => {
      setIsHighlighted(false)
    }, 300);

   return () => {
    clearTimeout(timer);
  };
  }, [items]);
  return (
  
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}><FiShoppingCart/></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
