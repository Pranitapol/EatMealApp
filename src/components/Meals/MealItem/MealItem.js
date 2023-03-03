import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

function MealItem(props) {
  const cartCtx=useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`

    const addToCartFunction=(amount)=>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
  return (
    <div>
      <li className={classes.meal}>
        <div><h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={ classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartFunction}/>
        </div>
      </li>
    </div>
  );
}

export default MealItem;
