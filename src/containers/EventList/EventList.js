import React, { Component } from "react";
import classes from "./EventList.module.scss";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as actions from "../../store/actions";
import Swipeable from "react-swipeable";

class EventList extends Component {
  componentDidMount() {
    if (!this.props.events || !this.props.events.length) {
      this.selectDay();
    }
  }

  selectDay = () => {
    var today =
      this.props.match && this.props.match.params.date
        ? new Date(this.props.match.params.date)
        : new Date();

    this.props.onSelectDay(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      this.props.language
    );
  };

  formatDate = x => x.toISOString().split("T")[0];

  render() {
    const events = this.props.events.map((x, i) => (
      <div key={"e" + i}>
        <Link
          className={classes.More}
          to={`/event/${this.formatDate(this.props.date)}/${x.id}`}
        >
          <h4 className={classes.EventListItemTitle}>{x.name}</h4>

          <p>{x.short} ...</p>
        </Link>
      </div>
    ));

    return (
      <div className={classes.EventList}>
        <Swipeable
          flickThreshold={0.8}
          delta={50}
          onSwipedLeft={() => this.props.onNextDay(this.props.date, this.props.language)}
          onSwipedRight={() => this.props.onPrevDay(this.props.date, this.props.language)}
        >
          <div className={classes.EventListHeader}>
            <Button
              btnType="NavCircle"
              clicked={() => this.props.onPrevDay(this.props.date, this.props.language)}
            >
              <FontAwesomeIcon icon="angle-double-left" />
            </Button>
            <div className={classes.EvnetListHeaderName}>
              <h3>{this.props.date.toDateString()}</h3>
            </div>
            <Button
              btnType="NavCircle"
              clicked={() => this.props.onNextDay(this.props.date, this.props.language)}
            >
              <FontAwesomeIcon icon="angle-double-right" />
            </Button>
          </div>
          {events}
        </Swipeable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.selectedDate,
    events: state.events,
    language: state.selectedLanguage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectDay: (year, month, day, language) =>
      dispatch(actions.selectDay(year, month, day, language)),
    onNextDay: (date, language) => dispatch(actions.nextDay(date, language)),
    onPrevDay: (date, language) => dispatch(actions.prevDay(date, language))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
