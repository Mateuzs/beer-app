// external
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import axios from "axios";
// components
import { BeerSearchInputForm, BeerList, SearchButton } from "../../components";
// types
import { Beer, BeerSearchRadioInput, PunkApiBeer, BeerSearchContainerProps } from "../../types";
// constants, utils
import { SEARCH_BUTTON_LABEL } from "../../constants";
import {
  mapBeerSearchRadioInputToInputDescription,
  mapBeerSearchRadioInputToInputPlaceholder,
  mapBeerSearchRadioInputToInputValidation,
  mapPunkApiBeerToBeer,
} from "../../utils";
import { config } from "../../config";
// styles
import "./BeerSearchContainer.scss";

const {
  punkApi: { origin, searchByBeerBrewedBeforeDatePathname, searchByBeerNamePathname },
} = config;

const BeerSearchContainer: FunctionComponent<BeerSearchContainerProps> = ({
  setIsError,
  setIsFetching,
  isFetching,
}) => {
  const [beerSearchInputValue, setBeerSearchInputValue] = useState<string>("");
  const [beerSearchRadioInputValue, setBeerSearchRadioInputValue] = useState<BeerSearchRadioInput>(
    BeerSearchRadioInput.NAME
  );
  const [isValidbeerSearchInputValue, setIsValidBeerSearchInputValue] = useState<boolean>(true);
  const [beerSearchInputValidation, setBeerSearchInputValidation] = useState<
    (value: string) => boolean
  >(() => mapBeerSearchRadioInputToInputValidation(beerSearchRadioInputValue));
  const [isEligibleToSearch, setIsEligibleToSearch] = useState<boolean>(false);
  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [isFetchedBeerList, setIsFetchedBeerList] = useState<boolean>(false);

  const onInputChangeCallback = useCallback(
    (inputValue: string) => setBeerSearchInputValue(inputValue),
    []
  );
  const onInputRadioChangeCallback = useCallback(
    (radioInput: BeerSearchRadioInput) => setBeerSearchRadioInputValue(radioInput),
    []
  );

  const fetchBeerList = async () => {
    if (!isFetching) {
      const searchBeersUrl = `${origin}${
        beerSearchRadioInputValue === BeerSearchRadioInput.NAME
          ? searchByBeerNamePathname
          : searchByBeerBrewedBeforeDatePathname
      }${beerSearchInputValue}`;

      try {
        setIsFetching(true);

        const punkApiBeers = (await axios.get(searchBeersUrl)).data as PunkApiBeer[];
        const beers = punkApiBeers.map((punkApiBeer) => mapPunkApiBeerToBeer(punkApiBeer));
        setBeerList(beers);
        setIsFetchedBeerList(true);
      } catch (error) {
        setIsError(true);
      }
    }
  };

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
            isDisabled={!isEligibleToSearch || isFetching}
            label={SEARCH_BUTTON_LABEL}
            onClickHandler={() => fetchBeerList()}
          />
        </div>
      </div>
      <BeerList beerList={beerList} isFetchedBeerList={isFetchedBeerList} />
    </div>
  );
};

export default BeerSearchContainer;
