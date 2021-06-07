// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { BeerList } from "../../../components";
// constants, utils
import { BEER_SEARCH_INFO } from "../../../constants";

describe("BeerList component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      isFetchedBeerList: true,
      beerList: [
        {
          id: 1,
          name: "BEER",
          imageUrl: "BEER_URL",
          description: "DESCRIPTION",
        },
      ],
    };
    const wrapper = shallow(<BeerList {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render list of beers", () => {
    const mockedData = {
      isFetchedBeerList: true,
      beerList: [
        {
          id: 1,
          name: "BEER",
          imageUrl: "BEER_URL",
          description: "DESCRIPTION",
        },
      ],
    };
    const component = shallow(<BeerList {...mockedData} />);

    expect(component.find('[data-test-id="beer-list"]').length).toEqual(1);
    expect(component.find('[data-test-id="beer-search-info"]').length).toEqual(0);
  });

  test("should render proper info when empty list fetched", () => {
    const mockedData = {
      isFetchedBeerList: true,
      beerList: [],
    };
    const component = shallow(<BeerList {...mockedData} />);

    expect(component.find('[data-test-id="beer-list"]').length).toEqual(0);
    expect(component.find('[data-test-id="beer-search-info"]').length).toEqual(1);
    expect(component.find('[data-test-id="beer-search-info"]').text()).toEqual(BEER_SEARCH_INFO);
  });

  test("should render null when no list fetched", () => {
    const mockedData = {
      isFetchedBeerList: false,
      beerList: [],
    };
    const component = shallow(<BeerList {...mockedData} />);

    expect(component.find('[data-test-id="beer-list"]').length).toEqual(0);
    expect(component.find('[data-test-id="beer-search-info"]').length).toEqual(0);
  });
});
