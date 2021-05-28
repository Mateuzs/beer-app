// external
import { FunctionComponent, useEffect, useState, useCallback } from "react";
import axios from "axios";
// components
import { ErrorMessage, LazyLoadImageContainer, SearchButton } from "../../components";
// types
import { Beer, PunkApiBeer } from "../../types";
// constants, utils
import {
  LABEL_SEARCH_BEER,
  LABEL_SEARCH_NON_ALCOHOLIC_BEER,
  LOADING_INFO,
  IMAGE_URL_PLACEHOLDER,
  ERROR_MESSAGE,
} from "../../constants";
import { config } from "../../config";
import { mapPunkApiBeerToBeer, getRandomBeerFromBeers } from "../../utils";
// styles
import "./DisplayRandomBeerContainer.scss";

const {
  punkApi: { origin, randomBeerPathname, nonAlcoholicBeersPathname },
} = config;

const randomBeerPlaceholder: Beer = {
  name: LOADING_INFO,
  description: LOADING_INFO,
  imageUrl: IMAGE_URL_PLACEHOLDER,
};

const DisplayRandomBeerContainer: FunctionComponent = () => {
  const [fetchingError, setFetchingError] = useState<boolean>(false);
  const [randomBeer, setRandomBeer] = useState<Beer>(randomBeerPlaceholder);
  const [disabledDataFetching, setDisabledDataFetching] = useState<boolean>(false);

  const fetchRandomBeer = useCallback(async () => {
    const randomBeerUrl = `${origin}${randomBeerPathname}`;

    if (!disabledDataFetching) {
      try {
        setRandomBeer(randomBeerPlaceholder);
        setDisabledDataFetching(true);

        const punkApiBeers = (await axios.get(randomBeerUrl)).data as PunkApiBeer[];
        const punkApiBeer = punkApiBeers.shift() as PunkApiBeer;
        const randomBeer = mapPunkApiBeerToBeer(punkApiBeer);

        setRandomBeer(randomBeer);
        setFetchingError(false);
      } catch (error) {
        setFetchingError(true);
      }
    }
  }, []);

  const fetchRandomNonAlcoholicBeer = useCallback(async () => {
    const nonAlcoholicBeersUrl = `${origin}${nonAlcoholicBeersPathname}`;

    if (!disabledDataFetching) {
      try {
        setRandomBeer(randomBeerPlaceholder);
        setDisabledDataFetching(true);

        const nonAlcoholicPunkApiBears = (await axios.get(nonAlcoholicBeersUrl))
          .data as PunkApiBeer[];
        const punkApiBeer = getRandomBeerFromBeers(nonAlcoholicPunkApiBears) as PunkApiBeer;
        const randomBeer = mapPunkApiBeerToBeer(punkApiBeer);

        setRandomBeer(randomBeer);
        setFetchingError(false);
      } catch (error) {
        setFetchingError(true);
      }
    }
  }, []);

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  useEffect(() => {
    let enableDataFetchingWithDelay: NodeJS.Timeout;

    if (disabledDataFetching === true) {
      enableDataFetchingWithDelay = setTimeout(() => {
        setDisabledDataFetching(false);
      }, 1000);
    }

    return () => clearTimeout(enableDataFetchingWithDelay);
  }, [disabledDataFetching]);

  return !fetchingError ? (
    <div className="random-beer-container">
      <p className="random-beer-title">{randomBeer.name}</p>
      <div className="random-beer-description-container">
        <div className="random-beer-image">
          <LazyLoadImageContainer imageUrl={randomBeer.imageUrl} />
        </div>
        <div className="random-beer-description">{randomBeer.description}</div>
        <div className="random-beer-description-buttons">
          <SearchButton
            isDisabled={disabledDataFetching}
            label={LABEL_SEARCH_BEER}
            onClickHandler={fetchRandomBeer}
          />
          <SearchButton
            isDisabled={disabledDataFetching}
            label={LABEL_SEARCH_NON_ALCOHOLIC_BEER}
            onClickHandler={fetchRandomNonAlcoholicBeer}
          />
        </div>
      </div>
    </div>
  ) : (
    <ErrorMessage errorMessage={ERROR_MESSAGE} />
  );
};

export default DisplayRandomBeerContainer;
