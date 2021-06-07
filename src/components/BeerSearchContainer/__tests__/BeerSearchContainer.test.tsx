// external
import React from "react";
import { shallow, mount } from "enzyme";
// components, utils
import { BeerSearchContainer } from "../../../components";

describe("BeerSearchContainer component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      isFetching: false,
      setIsFetching: jest.fn(),
      setIsError: jest.fn(),
    };
    const wrapper = shallow(<BeerSearchContainer {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render expected text", () => {
    const mockedData = {
      isFetching: false,
      setIsFetching: jest.fn(),
      setIsError: jest.fn(),
    };
    const component = mount(<BeerSearchContainer {...mockedData} />);

    expect(component.find('[data-test-id="beer-search-input-elements"]').length).toEqual(1);
    expect(component.find('[data-test-id="beer-search-input-search-button"]').length).toEqual(1);
    expect(component.find('[data-test-id="search-loading-info"]').length).toEqual(0);
  });
});
