// types
import { BeerSearchRadioInput } from "../../types";
// constants, utils
import {
  BEER_SEARCH_INPUT_DATE_DESCRIPTION,
  BEER_SEARCH_INPUT_NAME_DESCRIPTION,
} from "../../constants";
import { mapBeerSearchRadioInputToInputDescription } from "../../utils";

describe("mapBeerSearchRadioInputToInputDescription function", () => {
  test("return proper description for given input", () => {
    expect(mapBeerSearchRadioInputToInputDescription(BeerSearchRadioInput.NAME)).toEqual(
      BEER_SEARCH_INPUT_NAME_DESCRIPTION
    );
  });

  test("return proper description for given input", () => {
    expect(
      mapBeerSearchRadioInputToInputDescription(BeerSearchRadioInput.BREWED_BEFORE_DATE)
    ).toEqual(BEER_SEARCH_INPUT_DATE_DESCRIPTION);
  });
});
