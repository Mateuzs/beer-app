// external
import { FunctionComponent, useCallback, useEffect, useState } from "react";
// components
import { BeerSearchInputForm, BeerList, SearchButton } from "../../components";
// types
import { BeerSearchRadioInput } from "../../types";
// constants, utils
import {
  mapBeerSearchRadioInputToInputDescription,
  mapBeerSearchRadioInputToInputPlaceholder,
  mapBeerSearchRadioInputToInputValidation,
  validateBeerNameInput,
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
  }, [beerSearchRadioInputValue]);

  useEffect(() => {
    const validationResult = beerSearchInputValidation(beerSearchInputValue);
    setIsValidBeerSearchInputValue(validationResult);
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
            isDisabled={false}
            label="Search!"
            onClickHandler={() => console.log("clicked!")}
          />
        </div>
      </div>
      <BeerList />
    </div>
  );
};

export default BeerSearchContainer;
