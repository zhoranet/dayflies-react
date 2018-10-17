import React, {Component} from 'react'
import { connect } from 'react-redux';

import classes from './Layout.css'
import Title from '../Title/Title'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';

class Layout extends Component {

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
                <div className={classes.Layout}>
                    <div className={classes.MainContainer}>
                        <Title/>                
                        <div className={classes.SideDrawerContainer}>                    
                            <SideDrawer 
                                open={this.state.showSiteDrawer} 
                                onClose={this.sideDrawerClosedHandler}/>
                            <div className={classes.ToolbarContainer}>
                                <Toolbar toggleDrawer={this.sideDrawerToggleHandler} title='My App'/>                        
                                <div className={classes.ContentContainer}>                        
                                    {this.props.children}
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <Footer/>
                </div>          
            </React.Fragment>
        );    
    }
}

const mapStateToProps = state => {
    return {
        date: state.selectedDate,
    };
}

export default connect(mapStateToProps)(Layout);
