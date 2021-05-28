// external
import { FunctionComponent, useCallback, useEffect, useState } from "react";
// components
import { BeerSearchInputForm, BeerList, SearchButton } from "../../components";
// types
import { BeerSearchRadioInput } from "../../types";
// constants, utils
import { SEARCH_BUTTON_LABEL } from "../../constants";
import {
  mapBeerSearchRadioInputToInputDescription,
  mapBeerSearchRadioInputToInputPlaceholder,
  mapBeerSearchRadioInputToInputValidation,
} from "../../utils";
// styles
import "./BeerSearchContainer.scss";

const BeerSearchContainer: FunctionComponent = () => {
  const [beerSearchInputValue, setBeerSearchInputValue] = useState<string>("");
  const [beerSearchRadioInputValue, setBeerSearchRadioInputValue] = useState<BeerSearchRadioInput>(
    BeerSearchRadioInput.NAME
  );
  const [isValidbeerSearchInputValue, setIsValidBeerSearchInputValue] = useState<boolean>(true);
  const [beerSearchInputValidation, setBeerSearchInputValidation] = useState<
    (value: string) => boolean
  >(() => mapBeerSearchRadioInputToInputValidation(beerSearchRadioInputValue));
  const [isEligibleToSearch, setIsEligibleToSearch] = useState<boolean>(false);

  const onInputChangeCallback = useCallback(
    (inputValue: string) => setBeerSearchInputValue(inputValue),
    []
  );
  const onInputRadioChangeCallback = useCallback(
    (radioInput: BeerSearchRadioInput) => setBeerSearchRadioInputValue(radioInput),
    []
  );

  useEffect(() => {
    const validationFunction = mapBeerSearchRadioInputToInputValidation(beerSearchRadioInputValue);
    setBeerSearchInputValidation(() => validationFunction);

    const validationResult = validationFunction(beerSearchInputValue);
    setIsValidBeerSearchInputValue(validationResult);

    const isValidInputForm = !!beerSearchInputValue && validationResult;
    setIsEligibleToSearch(isValidInputForm);
  }, [beerSearchRadioInputValue]);

  useEffect(() => {
    const validationResult = beerSearchInputValidation(beerSearchInputValue);
    setIsValidBeerSearchInputValue(validationResult);

    const isValidInputForm = !!beerSearchInputValue && validationResult;
    setIsEligibleToSearch(isValidInputForm);
  }, [beerSearchInputValue]);

  return (
    <div className="beer-search-container">
      <div className="beer-search-input-container">
        <div className="beer-search-input-elements">
          <BeerSearchInputForm
            inputValue={beerSearchInputValue}
            inputPlaceholder={mapBeerSearchRadioInputToInputPlaceholder(beerSearchRadioInputValue)}
            onInputChangeCallback={onInputChangeCallback}
            onInputRadioChangeCallback={onInputRadioChangeCallback}
            inputDescription={mapBeerSearchRadioInputToInputDescription(beerSearchRadioInputValue)}
            isValidInputValue={isValidbeerSearchInputValue}
          />
        </div>
        <div className="beer-search-input-search-button">
          <SearchButton
            isDisabled={!isEligibleToSearch}
            label={SEARCH_BUTTON_LABEL}
            onClickHandler={() => console.log("clicked!")}
          />
        </div>
      </div>
      <BeerList />
    </div>
  );
};

export default BeerSearchContainer;
