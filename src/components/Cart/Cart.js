import React, { useContext } from "react";
import CartItem from "./CartItem"; 
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems=cartCtx.items.length>0;
    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})
    }
    
    return(
        <Modal onClose={props.onClose}>
           
           
            {cartCtx.items.map((item)=>(
                <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)}
                />
            ))}
             <div className={classes.total}>
                <span >Total Amount</span>
                <span>{totalAmount}</span>
            </div>
             <div className={classes.actions}>
            {hasItems && <button className={classes['button--alt']}>Order</button>}
              <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>
        </Modal>
        )
}

export default Cart;