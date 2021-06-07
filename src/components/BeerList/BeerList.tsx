// external
import { FunctionComponent, memo } from "react";
// components
import { LazyLoadImageContainer } from "../LazyLoadImageContainer";
// types
import { Beer, BeerListProps } from "../../types";
// constants, utils
import { SMALL_BEER_IMAGE_HEIGHT_PX, BEER_SEARCH_INFO } from "../../constants";
// styles
import "./BeerList.scss";

const BeerList: FunctionComponent<BeerListProps> = ({ beerList, isFetchedBeerList }) =>
  !!beerList.length ? (
    <div className="beer-list-container">
      <ul className="beer-list" data-test-id="beer-list">
        {beerList.map((beer: Beer) => (
          <li className="beer-element" key={beer.id}>
            <div className="beer-element-image">
              <LazyLoadImageContainer
                imageUrl={beer.imageUrl}
                height={SMALL_BEER_IMAGE_HEIGHT_PX}
              />
            </div>
            <div className="beer-element-descripiton">
              <p className="beer-element-title">{beer.name}</p>
              <div className="beer-element-description">{beer.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : isFetchedBeerList ? (
    <div data-test-id="beer-search-info" className="beer-search-info">
      {BEER_SEARCH_INFO}
    </div>
  ) : null;

export default memo(BeerList);
