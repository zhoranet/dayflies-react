import React, { Component } from "react";
import classes from "./SideDrawer.module.scss";
import Calendar from "../../containers/Calendar/Calendar";
import Backdrop from "../Backdrop/Backdrop";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class SideDrawer extends Component {

    changeLanguage =(event) => {

        console.log(event.target.value);

        this.props.onSelectLanguage(event.target.value);
    }
  
    render() {
        const sideDrawerClass = classes.SideDrawer + " " + 
            (this.props.open ? classes.Open : classes.Close);

        return (
            <React.Fragment>
                <Backdrop show={this.props.open} clicked={this.props.onClose} />
                <div className={sideDrawerClass}>
                    <Calendar closeCalendar={this.props.onClose} />
                    <div className={classes.Language}>
                        <LanguageSelector
                        label="Language"
                        changed={this.changeLanguage}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
  }
}

const mapStateToProps = state => {
    return { language: state.selectedLanguage };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectLanguage: language => dispatch(actions.selectLanguage(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
