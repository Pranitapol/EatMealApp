import React,{useRef,useState} from 'react';
import classes from './Checkout.module.css';

function Checkout(props) {
const [formValidity,setFormValidity]=useState({
  name:true,
  street:true,
  postalCode:true,
  city:true
})
let isdisabled=false;
  const isEmpty=(value)=>value.trim()==='';
  const submitFormHandler=(event)=>{
    event.preventDefault();

    const name=namInputRef.current.value;
    const street=streetInputRef.current.value;
    const postalCode=postalCodeInputRef.current.value;
    const city=cityInputRef.current.value

    const isNameValid=!isEmpty(name)
    const isStreetValid=!isEmpty(street)
    const isPostalCodeValid=!isEmpty(postalCode)
    const isCityValid=!isEmpty(city)

  setFormValidity({
    name:isNameValid,
    street:isStreetValid,
    postalCode:isPostalCodeValid,
    city:isCityValid
  })

    const formIsValid=isNameValid && isStreetValid && isPostalCodeValid && isCityValid;
    if(!formIsValid){
      isdisabled=true;
      return;
    }
    props.onSubmit({
      name:name,
      street:street,
      postalCode:postalCode,
      city:city
    })
  }

const namInputRef=useRef();
const streetInputRef=useRef();
const postalCodeInputRef=useRef();
const cityInputRef=useRef();

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className={classes.controls}>
            <label >Name</label>
            <input type='text' ref={namInputRef} className='form-control'/>
            {!formValidity.name && <p>Please enter valid name</p>}
        </div>

        <div className={classes.controls}>
            <label>Street</label>
            <input type='text' ref={streetInputRef} className='form-control'/>
            {!formValidity.street && <p>Please enter valid street</p>}
        </div>

        <div className={classes.controls}>
            <label>Postal Code</label>
            <input type='text' ref={postalCodeInputRef} className='form-control'/>
            {!formValidity.postalCode && <p>Please enter valid postalcode</p>}
        </div>

        <div className={classes.controls}>
            <label>City</label>
            <input type='text' ref={cityInputRef} className='form-control'/>
            {!formValidity.city && <p>Please enter valid city</p>}
        </div>

        <div className={classes.actions}>

        <button type='submit' disabled={isdisabled && classes.confirm}>confirm</button>
        <button type='button' onClick={props.cancelHandler}>cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
