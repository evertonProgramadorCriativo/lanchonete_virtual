import React from 'react'
import classes from './NavitionItems.module.css'
import NavitionItem from './--Navigation_Item--/NavigationItem';

const navigationitems = () => (
    <ul className={classes.NavitionItem}>
    <NavitionItem link="/" active>Burger Builder</NavitionItem>
    <NavitionItem link="/" active>Checkout</NavitionItem>

    </ul>
);

export default navigationitems;