import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./Form";
import Input from "../Input/Input";

configure({ adapter: new Adapter() });

describe("<Form />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Form />);
	});

	it("should render empty <form /> without elements", () => {
		expect(wrapper.find("form")).toHaveLength(1);
	});	

	it("should render <form /> with single input", () => {
		wrapper.setProps({ inputElements: {name: { elemtType: "input", label: "Name", value: 'The big event' }} });
		expect(wrapper.find("form")).toHaveLength(1);
		expect(wrapper.find(Input)).toHaveLength(1);
	});	
});
