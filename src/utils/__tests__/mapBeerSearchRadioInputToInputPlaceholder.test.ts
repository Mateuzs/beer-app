// types
import { BeerSearchRadioInput } from "../../types";
// constants, utils
import {
  BEER_SEARCH_INPUT_DATE_PLACEHOLDER,
  BEER_SEARCH_INPUT_NAME_PLACEHOLDER,
} from "../../constants";
import { mapBeerSearchRadioInputToInputPlaceholder } from "../../utils";

describe("mapBeerSearchRadioInputToInputPlaceholder function", () => {
  test("return proper description for given input", () => {
    expect(mapBeerSearchRadioInputToInputPlaceholder(BeerSearchRadioInput.NAME)).toEqual(
      BEER_SEARCH_INPUT_NAME_PLACEHOLDER
    );
  });

  test("return proper description for given input", () => {
    expect(
      mapBeerSearchRadioInputToInputPlaceholder(BeerSearchRadioInput.BREWED_BEFORE_DATE)
    ).toEqual(BEER_SEARCH_INPUT_DATE_PLACEHOLDER);
  });
});
