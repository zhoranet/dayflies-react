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

    sideDrawerToggleHandler = () => {
        this.setState({showSiteDrawer: !this.state.showSiteDrawer});
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.MyApp}>
                    <div className={classes.MainContent}>
                        <Title/>                
                        <div className={classes.Layout}>                    
                            <SideDrawer 
                                open={this.state.showSiteDrawer} 
                                onClose={this.sideDrawerClosedHandler}/>
                            <div className={classes.Container}>
                                <Toolbar toggleDrawer={this.sideDrawerToggleHandler}/>                        
                                <div className={classes.Content}>                        
                                    {this.props.children}
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div className={classes.Footer}>
                        My Footer
                    </div>
                </div>          
            </React.Fragment>
        );    
    }
}

export default layout;