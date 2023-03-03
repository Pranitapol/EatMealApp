import React from 'react';
import classes from './Input.module.css'
const Input=React.forwardRef((props,ref)=>{
return(
    <section className={classes.input}>
        <label>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </section>
)
})

export default Input;