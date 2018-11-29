import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { EventList } from "./EventList";

configure({ adapter: new Adapter() });

describe("<EventList />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<EventList getDayUrl={() => "/"} events={[]} date={new Date()} language={"en"}/>);
	});

	it("should render <Link /> when receiving events", () => {
		wrapper.setProps({
			events: [
				{ id: "1", name: "t1", short: "s1" },
				{ id: "2", name: "t2", short: "s2" }
			]
		});
		expect(wrapper.find('h4')).toHaveLength(2);
	});
});
