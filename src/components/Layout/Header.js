import React, { Fragment } from "react";
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>EatMeal</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage}></img>
            </div>
        </Fragment>
    )
}

export default Header;