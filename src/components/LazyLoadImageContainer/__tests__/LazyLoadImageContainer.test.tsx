// external
import React from "react";
import { shallow, mount } from "enzyme";
// components
import { LazyLoadImageContainer } from "../../../components";
// constants, utils
import { IMAGE_NOT_AVAILABLE_INFO, IMAGE_URL_PLACEHOLDER, LOADING_INFO } from "../../../constants";

describe("LazyLoadImageContainer component", () => {
  test("should match the snapshot and styles", () => {
    const mockedData = {
      imageUrl: "image-url",
      height: 100,
    };
    const wrapper = shallow(<LazyLoadImageContainer {...mockedData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should render lazy load image component when url provided", () => {
    const mockedData = {
      imageUrl: "image-url",
      height: 100,
    };
    const component = mount(<LazyLoadImageContainer {...mockedData} />);

    expect(component.find('[data-test-id="lazy-load-image"]').length).toEqual(1);
    expect(component.find('[data-test-id="lazy-load-image-placeholder"]').length).toEqual(0);
  });

  test("should render lazy load image placeholder with proper text when url is placeholder", () => {
    const mockedData = {
      imageUrl: IMAGE_URL_PLACEHOLDER,
      height: 100,
    };
    const component = mount(<LazyLoadImageContainer {...mockedData} />);

    expect(component.find('[data-test-id="lazy-load-image"]').length).toEqual(0);
    expect(component.find('[data-test-id="lazy-load-image-placeholder"]').length).toEqual(1);
    expect(component.find('[data-test-id="lazy-load-image-placeholder"]').text()).toEqual(
      LOADING_INFO
    );
  });

  test("should render lazy load image placeholder with proper text when url is not available", () => {
    const mockedData = {
      imageUrl: null,
      height: 100,
    };
    const component = mount(<LazyLoadImageContainer {...mockedData} />);

    expect(component.find('[data-test-id="lazy-load-image"]').length).toEqual(0);
    expect(component.find('[data-test-id="lazy-load-image-placeholder"]').length).toEqual(1);
    expect(component.find('[data-test-id="lazy-load-image-placeholder"]').text()).toEqual(
      IMAGE_NOT_AVAILABLE_INFO
    );
  });
});
