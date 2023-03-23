import React, { useContext,useState } from "react";
import CartItem from "./CartItem"; 
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import Checkout  from "./Checkout"; 

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
    const [showForm, setSHowForm] = useState(false);
    const clickHandler=()=>{
        setSHowForm(true);

    }

    const submitOrderHandler=async (userdata)=>{
        console.log('user data',userdata,cartCtx.items);
          const result= await fetch('http://localhost:5000/orders/ordermeal',{
                method:'POST',
                body:JSON.stringify({
                    "user":[userdata],
                    "orderItems":[cartCtx.items]
                })
            })
            const newresult=await result.json()
            console.log(newresult);
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

              { showForm && <Checkout onSubmit={submitOrderHandler}cancelHandler={props.onClose}/>}

             <div className={classes.actions}>
            {hasItems && <button className={classes['button--alt']} onClick={clickHandler}>Order</button>}
              <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>
        </Modal>
        )
}

export default Cart;