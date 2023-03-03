import React from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
import { useRef,useState } from "react";
const MealItemForm=(props)=>{
const amountInputRef=useRef()
const [isAmountValid, setAmountIsValid] = useState(true);

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNummber=+enteredAmount;

        if(enteredAmount.trim().length ===0|| enteredAmountNummber<1 || enteredAmountNummber>5 ){
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNummber)
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' 
                ref={amountInputRef}
                input={{
                    id:'amount'+props.id,
                    type:'number',
                    min:'1',
                    max:'5',
                    defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!isAmountValid && <p>please enter valid amount(1-5)</p>}
        </form>

    )

}

export default MealItemForm;