// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { DisplayRandomBeerContainer } from "../../../components";

const mockedValidResponse = [
  {
    id: 0,
    name: "BEER",
    image_url: "IMAGE_URL",
    description: "DESCRIPTION",
  },
];

jest.mock("axios", () => ({
  get: (url: string) => {
    switch (url) {
      case "https://api.punkapi.com/v2/beers/random":
        return {
          data: mockedValidResponse,
        };
    }
  },
}));

describe("DisplayRandomBeerContainer component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      isFetching: false,
      setIsFetching: jest.fn(),
      setIsError: jest.fn(),
    };
    const wrapper = shallow(<DisplayRandomBeerContainer {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render expected text", async () => {
    const mockedData = {
      isFetching: false,
      setIsFetching: jest.fn(),
      setIsError: jest.fn(),
    };
    const component = mount(<DisplayRandomBeerContainer {...mockedData} />);

    expect(component.find('[data-test-id="random-beer-description"]').text()).toEqual("Loading...");
    expect(component.find('[data-test-id="random-beer-title"]').text()).toEqual("Loading...");
    expect(component.find('[data-test-id="random-beer-image"]').length).toEqual(1);
    expect(component.find('[data-test-id="random-beer-description-buttons"]').length).toEqual(1);

    await new Promise((r) => setTimeout(r, 1000));

    expect(component.find('[data-test-id="random-beer-description"]').text()).toEqual(
      "DESCRIPTION"
    );
    expect(component.find('[data-test-id="random-beer-title"]').text()).toEqual("BEER");
  });
});
