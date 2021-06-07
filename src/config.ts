import { Config } from "./types";

export const config: Config = {
  punkApi: {
    origin: "https://api.punkapi.com",
    randomBeerPathname: "/v2/beers/random",
    nonAlcoholicBeersPathname: "/v2/beers?abv_lt=1",
    searchByBeerNamePathname: "/v2/beers?beer_name=",
    searchByBeerBrewedBeforeDatePathname: "/v2/beers?brewed_before=",
  },
};
