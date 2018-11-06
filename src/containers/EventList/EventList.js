import React, { Component } from "react";
import classes from "./EventList.module.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swipeable from "react-swipeable";
import withEventLoader from "../../hoc/EventLoader/EventLoader";

export class EventList extends Component {
	incrementDay(date, step) {
		var newDate = new Date(date);
		newDate.setDate(newDate.getDate() + step);
		return newDate;
	}

	swipe = toUrl => this.props.history.replace(toUrl);

	render() {
		const date = this.props.date;
		const language = this.props.language;
		const dayUrl = this.props.dayUrl;
		const nextDayUrl = this.props.getDayUrl(language, this.incrementDay(date, 1));
		const prevDayUrl = this.props.getDayUrl(language, this.incrementDay(date, -1));

		const events = this.props.events.map((x, i) => (
			<div key={"e" + i}>
				<Link className={classes.More} to={`/event${dayUrl}/${x.id}`}>
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
					onSwipedLeft={() => this.swipe(nextDayUrl)}
					onSwipedRight={() => this.swipe(prevDayUrl)}
				>
					<div className={classes.EventListHeader}>
						<Link to={prevDayUrl}>
							<Button btnType="NavCircle">
								<FontAwesomeIcon icon="angle-double-left" />
							</Button>
						</Link>

						<div className={classes.EvnetListHeaderName}>
							<h3>{date.toDateString()}</h3>
						</div>

						<Link to={nextDayUrl}>
							<Button btnType="NavCircle">
								<FontAwesomeIcon icon="angle-double-right" />
							</Button>
						</Link>
					</div>
					{events}
				</Swipeable>
			</div>
		);
	}
}

export default withEventLoader(EventList);
