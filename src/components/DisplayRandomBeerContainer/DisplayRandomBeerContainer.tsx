// external
import { FunctionComponent, useEffect, useState, useCallback } from "react";
import axios from "axios";
// components
import { LazyLoadImageContainer, SearchButton } from "../../components";
// types
import { Beer, PunkApiBeer, DisplayRandomBeerContainerProps } from "../../types";
// constants, utils
import {
  LABEL_SEARCH_BEER,
  LABEL_SEARCH_NON_ALCOHOLIC_BEER,
  LOADING_INFO,
  IMAGE_URL_PLACEHOLDER,
  BEER_IMAGE_HEIGHT_PX,
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
  id: NaN,
};

const DisplayRandomBeerContainer: FunctionComponent<DisplayRandomBeerContainerProps> = ({
  setIsError,
  setIsFetching,
  isFetching,
}) => {
  const [randomBeer, setRandomBeer] = useState<Beer>(randomBeerPlaceholder);

  const fetchRandomBeer = useCallback(async () => {
    const randomBeerUrl = `${origin}${randomBeerPathname}`;

    if (!isFetching) {
      try {
        setRandomBeer(randomBeerPlaceholder);
        setIsFetching(true);

        const punkApiBeers = (await axios.get(randomBeerUrl)).data as PunkApiBeer[];
        const punkApiBeer = punkApiBeers.shift() as PunkApiBeer;
        const randomBeer = mapPunkApiBeerToBeer(punkApiBeer);

        setRandomBeer(randomBeer);
      } catch (error) {
        setIsError(true);
      }
    }
  }, []);

  const fetchRandomNonAlcoholicBeer = useCallback(async () => {
    const nonAlcoholicBeersUrl = `${origin}${nonAlcoholicBeersPathname}`;

    if (!isFetching) {
      try {
        setRandomBeer(randomBeerPlaceholder);
        setIsFetching(true);

        const nonAlcoholicPunkApiBears = (await axios.get(nonAlcoholicBeersUrl))
          .data as PunkApiBeer[];
        const punkApiBeer = getRandomBeerFromBeers(nonAlcoholicPunkApiBears) as PunkApiBeer;
        const randomBeer = mapPunkApiBeerToBeer(punkApiBeer);

        setRandomBeer(randomBeer);
      } catch (error) {
        setIsError(true);
      }
    }
  }, []);

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return (
    <div className="random-beer-container">
      <p data-test-id="random-beer-title" className="random-beer-title">
        {randomBeer.name}
      </p>
      <div className="random-beer-description-container">
        <div data-test-id="random-beer-image" className="random-beer-image">
          <LazyLoadImageContainer imageUrl={randomBeer.imageUrl} height={BEER_IMAGE_HEIGHT_PX} />
        </div>
        <div data-test-id="random-beer-description" className="random-beer-description">
          {randomBeer.description}
        </div>
        <div
          data-test-id="random-beer-description-buttons"
          className="random-beer-description-buttons"
        >
          <SearchButton
            isDisabled={isFetching}
            label={LABEL_SEARCH_BEER}
            onClickHandler={fetchRandomBeer}
          />
          <SearchButton
            isDisabled={isFetching}
            label={LABEL_SEARCH_NON_ALCOHOLIC_BEER}
            onClickHandler={fetchRandomNonAlcoholicBeer}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayRandomBeerContainer;
