import React from 'react'
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/--Navigation_Item--'
import DrawerToggle from '../SideDrawer/--Drawer_Toggle--/DrawerToggle'



const toolbar = (props) => (
    <header className={classes.toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;