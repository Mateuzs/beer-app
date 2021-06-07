// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { BeerSearchInputForm } from "../../../components";

describe("BeerSearchInputForm component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      inputValue: "INPUT_VALUE",
      isValidInputValue: true,
      inputPlaceholder: "INPUT_PLACEHOLDER",
      inputDescription: "INPUT_DESCRIPITON",
      onInputChangeCallback: jest.fn(),
      onInputRadioChangeCallback: jest.fn(),
    };
    const wrapper = shallow(<BeerSearchInputForm {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render expected components", () => {
    const mockedData = {
      inputValue: "INPUT_VALUE",
      isValidInputValue: true,
      inputPlaceholder: "INPUT_PLACEHOLDER",
      inputDescription: "INPUT_DESCRIPITON",
      onInputChangeCallback: jest.fn(),
      onInputRadioChangeCallback: jest.fn(),
    };
    const component = mount(<BeerSearchInputForm {...mockedData} />);

    expect(component.find('[data-test-id="beer-search-input"]').length).toEqual(1);
    expect(component.find('[data-test-id="beer-search-description"]').length).toEqual(1);
    expect(component.find('[data-test-id="beer-search-input-radio-name"]').length).toEqual(1);
    expect(component.find('[data-test-id="beer-search-input-radio-brewed-before"]').length).toEqual(
      1
    );
  });
});
