// types
import { PunkApiBeer } from "../../types";
// constants, utils
import { mapPunkApiBeerToBeer } from "../../utils";

describe("mapPunkApiBeerToBeer function", () => {
  test("maps properly incoming beer data to internal structure", () => {
    const mockedPunkApiBeer = {
      id: 0,
      name: "BEER",
      image_url: "IMAGE_URL",
      description: "DESCRIPTION",
    } as PunkApiBeer;

    const expectedBeer = {
      id: 0,
      name: "BEER",
      imageUrl: "IMAGE_URL",
      description: "DESCRIPTION",
    };

    expect(mapPunkApiBeerToBeer(mockedPunkApiBeer)).toEqual(expectedBeer);
  });

  test("maps empty object to fallback values", () => {
    const mockedPunkApiBeer = {
      id: 0,
    } as PunkApiBeer;

    const expectedBeer = {
      id: 0,
      name: "",
      imageUrl: "",
      description: "",
    };

    expect(mapPunkApiBeerToBeer(mockedPunkApiBeer)).toEqual(expectedBeer);
  });
});
