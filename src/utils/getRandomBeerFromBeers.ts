// types
import { PunkApiBeer } from "../types";

const getRandomBeerFromBeers = (beers: PunkApiBeer[]): PunkApiBeer =>
  beers[Math.floor(Math.random() * beers.length)];

export default getRandomBeerFromBeers;
