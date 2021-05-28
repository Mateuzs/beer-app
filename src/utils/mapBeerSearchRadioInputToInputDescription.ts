// types
import { BeerSearchRadioInput } from "../types";
// constants
import {
  BEER_SEARCH_INPUT_DATE_DESCRIPTION,
  BEER_SEARCH_INPUT_NAME_DESCRIPTION,
} from "../constants";

const mapBeerSearchRadioInputToInputDescription = (
  beerSearchRadioInput: BeerSearchRadioInput
): string =>
  ({
    [BeerSearchRadioInput.NAME]: BEER_SEARCH_INPUT_NAME_DESCRIPTION,
    [BeerSearchRadioInput.BREWED_BEFORE_DATE]: BEER_SEARCH_INPUT_DATE_DESCRIPTION,
  }[beerSearchRadioInput]);

export default mapBeerSearchRadioInputToInputDescription;
