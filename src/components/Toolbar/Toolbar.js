import React from 'react'
import classes from './Toolbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';


const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.NavigationListConatiner}>
                <Button clicked={props.toggleDrawer}>
                    <FontAwesomeIcon icon="bars" size="2x"/>
                </Button>
            </div>            
        </div>
    );
}

export default toolbar;