import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "./Input";

configure({ adapter: new Adapter() });

export const log = s => {
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

	it("should render <Input label=.../> with label", () => {
		wrapper.setProps({ label: "test" });
		expect(wrapper.find("label")).toHaveLength(1);
	});

	it("should render <Input /> without label", () => {
		expect(wrapper.find("label")).toHaveLength(0);
	});

	it("should render <Input /> with maxLength", () => {
		wrapper.setProps({ elementConfig: {maxLength: 3} });
		const input = wrapper.find("input[maxLength=3]");
		expect(input).toHaveLength(1);
	});
});
