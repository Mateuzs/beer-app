// Config
export interface Config {
  punkApi: {
    origin: string;
    randomBeerPathname: string;
    nonAlcoholicBeersPathname: string;
    searchByBeerNamePathname: string;
    searchByBeerBrewedBeforeDatePathname: string;
  };
}
// components
export interface SearchButtonProps {
  isDisabled: boolean;
  label: string;
  onClickHandler: () => void;
}

export interface ErrorMessageProps {
  errorMessage: string;
}

export interface LazyLoadImageContainerProps {
  imageUrl: string | null;
  height: number;
}

export interface BeerSearchInputFormProps {
  inputValue: string;
  inputPlaceholder: string;
  inputDescription: string;
  onInputChangeCallback: (event: string) => void;
  onInputRadioChangeCallback: (event: BeerSearchRadioInput) => void;

  isValidInputValue: boolean;
}

export interface BeerListProps {
  beerList: Beer[];
  isFetchedBeerList: boolean;
}

export interface BeerSearchContainerProps {
  setIsError: (value: boolean) => void;
  setIsFetching: (value: boolean) => void;
  isFetching: boolean;
}

export interface DisplayRandomBeerContainerProps {
  setIsError: (value: boolean) => void;
  setIsFetching: (value: boolean) => void;
  isFetching: boolean;
}

// internal data structure
export interface Beer {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

// beer api structure

export interface PunkApiBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: [
      {
        temp: {
          value: number;
          unit: string;
        };
        duration: number;
      }
    ];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: string;
  };
  ingredients: {
    malt: PunkApiMalt[];
    hops: PunkApiHop[];
    yeast: string;
  };
  food_pairing: Array<String>;
  brewers_tips: string;
  contributed_by: string;
}

interface PunkApiMalt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface PunkApiHop {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}

// enums
export const enum BeerSearchRadioInput {
  NAME = "name",
  BREWED_BEFORE_DATE = "brewedBeforeDate",
}
