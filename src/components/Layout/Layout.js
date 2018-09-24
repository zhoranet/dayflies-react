import React, {Component} from 'react'
import classes from './Layout.css'
import Title from '../Title/Title'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer';

class layout extends Component {

    state = {
        showSiteDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSiteDrawer: false});
    }

    sideDrawerOpenedHandler = () => {
        this.setState({showSiteDrawer: true});
    }

    render() {
        return (
            <React.Fragment>
                <Title/>
                <Toolbar/>
                <div className={classes.Layout}>                    
                    <SideDrawer/>
                    <div className={classes.Content}>                        
                        {this.props.children}
                    </div>
                </div>                
            </React.Fragment>
        );    
    }
}

export default layout;