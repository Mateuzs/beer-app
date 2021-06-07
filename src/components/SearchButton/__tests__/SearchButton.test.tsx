// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { SearchButton } from "../../../components";

describe("SearchButton component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      label: "BUTTON_LABEL",
      onClickHandler: jest.fn(),
      isDisabled: false,
    };
    const wrapper = shallow(<SearchButton {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render expected label and trigger handler when enabled", () => {
    const mockedHandler = jest.fn();
    const mockedData = {
      label: "BUTTON_LABEL",
      onClickHandler: mockedHandler,
      isDisabled: false,
    };
    const component = mount(<SearchButton {...mockedData} />);

    expect(component.find('[data-test-id="search-button"]').text()).toEqual("BUTTON_LABEL");
    expect(component.find("button").hasClass("search-button")).toEqual(true);
    component.simulate("click");
    expect(mockedHandler).toHaveBeenCalled();
  });

  test("should render expected label and not handler when disabled", () => {
    const mockedHandler = jest.fn();
    const mockedData = {
      label: "BUTTON_LABEL",
      onClickHandler: mockedHandler,
      isDisabled: true,
    };
    const component = mount(<SearchButton {...mockedData} />);

    expect(component.find('[data-test-id="search-button"]').text()).toEqual("BUTTON_LABEL");
    expect(component.find("button").hasClass("search-button-disabled")).toEqual(true);
    component.simulate("click");
    expect(mockedHandler).toHaveBeenCalledTimes(0);
  });
});
