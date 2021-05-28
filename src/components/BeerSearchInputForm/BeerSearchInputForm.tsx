// external
import { FunctionComponent, ChangeEvent, useCallback, memo } from "react";
// types
import { BeerSearchInputFormProps, BeerSearchRadioInput } from "../../types";
// constants, utils
import {
  BEER_SEARCH_INPUT_RADIO_NAME,
  BEER_SEARCH_INPUT_RADIO_TYPE,
  BEER_SEARCH_INPUT_RADIO_NAME_DESCRIPTION,
  BEER_SEARCH_INPUT_RADIO_DATE_DESCRIPTION,
} from "../../constants";
// styles
import "./BeerSearchInputForm.scss";

const BeerSearchInputForm: FunctionComponent<BeerSearchInputFormProps> = ({
  inputValue,
  inputPlaceholder,
  inputDescription,
  onInputChangeCallback,
  onInputRadioChangeCallback,
  isValidInputValue,
}) => {
  const handleInputchange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChangeCallback(event.target.value);
  };

  const handleInputRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const radioInput = event.target.value as unknown as BeerSearchRadioInput;
    onInputRadioChangeCallback(radioInput);
  };

  const descriptionClassName =
    !!inputValue && !isValidInputValue
      ? "beer-search-description-incorrect"
      : "beer-search-description-correct";

  return (
    <div className="beer-search-input-container">
      <div className="beer-search-input-component">
        <input
          className="beer-search-input"
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={handleInputchange}
        />
        <p className={descriptionClassName}>{inputDescription}</p>
      </div>
      <div className="bear-search-radio-input-container">
        <input
          className="beer-search-radio-input"
          type={BEER_SEARCH_INPUT_RADIO_TYPE}
          name={BEER_SEARCH_INPUT_RADIO_NAME}
          id={BeerSearchRadioInput.NAME}
          value={BeerSearchRadioInput.NAME}
          onChange={handleInputRadioChange}
          defaultChecked={true}
        />
        <label htmlFor={BeerSearchRadioInput.NAME}>
          {BEER_SEARCH_INPUT_RADIO_NAME_DESCRIPTION}
        </label>
        <input
          className="beer-search-radio-input"
          type={BEER_SEARCH_INPUT_RADIO_TYPE}
          name={BEER_SEARCH_INPUT_RADIO_NAME}
          id={BeerSearchRadioInput.BREWED_BEFORE_DATE}
          value={BeerSearchRadioInput.BREWED_BEFORE_DATE}
          onChange={handleInputRadioChange}
        />
        <label htmlFor={BeerSearchRadioInput.BREWED_BEFORE_DATE}>
          {BEER_SEARCH_INPUT_RADIO_DATE_DESCRIPTION}
        </label>
      </div>
    </div>
  );
};

export default memo(BeerSearchInputForm);
