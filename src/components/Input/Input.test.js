import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "./Input";

configure({ adapter: new Adapter() });

export const log = (s) => {
	console.log(s);
	console.log(s);
	console.log(s);
	process.stdout.write(s + "\n");
};

describe("<Input />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Input elementType="input" />);
	});

	it("should render <Input /> with label", () => {
		log(wrapper.debug());
		expect(wrapper.find("label"));
	});
});
