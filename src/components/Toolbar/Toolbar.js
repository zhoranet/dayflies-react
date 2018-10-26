import React from 'react'
import classes from './Toolbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';


const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.NavigationListConatiner}>
                <Button btnType="ToggleSideDrawer" clicked={props.toggleDrawer}>
                    <FontAwesomeIcon icon="bars" size="2x"/>
                </Button>
            </div>
            <div className={classes.Title}>
                <h2>{props.title}</h2>
            </div>            
        </div>
    );
}

export default toolbar;