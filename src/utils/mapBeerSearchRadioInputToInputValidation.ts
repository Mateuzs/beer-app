// types
import { BeerSearchRadioInput } from "../types";

export const validateBeerNameInput = (value: string): boolean => {
  const regexPattern = /^[A-Za-z0-9 _-]*$/;
  return !!value && regexPattern.test(value);
};

export const validateBeerBrewedDate = (value: string): boolean => {
  const regexPattern = /^(0?[1-9]|1[012])-[1-9]\d{3}$/;
  return !!value && regexPattern.test(value);
};

const mapBeerSearchRadioInputToInputValidation = (
  beerSearchRadioInput: BeerSearchRadioInput
): ((value: string) => boolean) =>
  ({
    [BeerSearchRadioInput.NAME]: validateBeerNameInput,
    [BeerSearchRadioInput.BREWED_BEFORE_DATE]: validateBeerBrewedDate,
  }[beerSearchRadioInput]);

export default mapBeerSearchRadioInputToInputValidation;
