// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { ErrorMessage } from "../../../components";

describe("ErrorMessage component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      errorMessage: "ERROR_MESSAGE",
    };
    const wrapper = shallow(<ErrorMessage {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render proper error message", () => {
    const mockedData = {
      errorMessage: "ERROR_MESSAGE",
    };
    const component = mount(<ErrorMessage {...mockedData} />);

    expect(component.find('[data-test-id="error-message-info"]').text()).toEqual("ERROR_MESSAGE");
  });
});
