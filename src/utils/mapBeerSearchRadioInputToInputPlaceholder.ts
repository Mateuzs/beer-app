// types
import { BeerSearchRadioInput } from "../types";
// constants
import {
  BEER_SEARCH_INPUT_DATE_PLACEHOLDER,
  BEER_SEARCH_INPUT_NAME_PLACEHOLDER,
} from "../constants";

const mapBeerSearchRadioInputToInputPlaceholder = (
  beerSearchRadioInput: BeerSearchRadioInput
): string =>
  ({
    [BeerSearchRadioInput.NAME]: BEER_SEARCH_INPUT_NAME_PLACEHOLDER,
    [BeerSearchRadioInput.BREWED_BEFORE_DATE]: BEER_SEARCH_INPUT_DATE_PLACEHOLDER,
  }[beerSearchRadioInput]);

export default mapBeerSearchRadioInputToInputPlaceholder;
