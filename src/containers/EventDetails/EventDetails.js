import React, { Component } from "react";
import classes from "./EventDetails.module.scss";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Swipeable from "react-swipeable";
import withEventLoader from "../../hoc/EventLoader/EventLoader";

class EventDetails extends Component {
	getEventDetailsById = id => {
		console.log("getEventDetailsById", this.props.events);

		return this.props.events.filter(x => x.id === id)[0];
	};

	findIndex = (array, id) => {
		for (let index = 0; index < array.length; index++) {
			if (array[index].id === id) {
				return index;
			}
		}
		return -1;
	};

	getEventDetailsId = (id, step) => {
		if (!this.props.events || !this.props.events.length) {
			return 0;
		}

		let index = this.findIndex(this.props.events, id);

		if (index < 0) {
			return -1;
		}

		index += step;

		if (index >= this.props.events.length) {
			index = 0;
		} else if (index < 0) {
			index = this.props.events.length - 1;
		}
		return this.props.events[index].id;
	};

	createMarkup = text => {
		var paragraps = text.split("\r\n");
		paragraps.map(p => `<p>${p}</p>`);
		return { __html: text.replace(/\r\n/g, "<br />") };
	};

	getEventUrl(step) {
		const id = this.getEventDetailsId(this.props.match.params.id, step);
		const dayUrl = this.props.getDayUrl(this.props.language, this.props.date);
		return `/event${dayUrl}/${id}`;
	}

	swipe = step => this.props.history.replace(this.getEventUrl(step));

	render() {
		const date = this.props.date;
		const language = this.props.language;
		const eventDetails = this.getEventDetailsById(this.props.match.params.id);
		let details = null;

		if (eventDetails) {
			const dateUrl = this.props.getDayUrl(language, date);
			const leftUrl = this.getEventUrl(-1);
			const rightUrl = this.getEventUrl(1);
			const paragraphList = eventDetails.full.split("\r\n").map((x, i) => <p key={i}>{x}</p>);

			details = (
				<React.Fragment>
					<div className={classes.EventListHeader}>
						<Link to={dateUrl}>
							<Button btnType="NavBorderText">
								<FontAwesomeIcon icon="angle-double-left" />
								{" " + date.toDateString()}
							</Button>
						</Link>
					</div>
					<Swipeable
						flickThreshold={0.8}
						delta={50}
						onSwipedLeft={() => this.swipe(1)}
						onSwipedRight={() => this.swipe(-1)}
					>
						<div className={classes.EventDetailsHeader}>
							<Link to={leftUrl} replace>
								<Button btnType="NavCircle">
									<FontAwesomeIcon icon="chevron-left" />
								</Button>
							</Link>

							<h4 className={classes.EvnetDeatilsHeaderName}>{eventDetails.name}</h4>

							<Link to={rightUrl} replace>
								<Button btnType="NavCircle">
									<FontAwesomeIcon icon="chevron-right" />
								</Button>
							</Link>
						</div>
						{paragraphList}
					</Swipeable>
				</React.Fragment>
			);
		}

		return <div className={classes.EventDetails}>{details}</div>;
	}
}

export default withEventLoader(EventDetails);
