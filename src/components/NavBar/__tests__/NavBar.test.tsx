// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { NavBar } from "../../../components";
// constants, utils
import { APP_HEADER } from "../../../constants";

describe("NavBar component", () => {
  test("should match the snapshot and styles", () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render expected text", () => {
    const component = mount(<NavBar />);

    expect(component.find('[data-test-id="nav-bar-text"]').text()).toEqual(APP_HEADER);
  });
});
