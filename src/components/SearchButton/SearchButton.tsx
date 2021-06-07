// external
import { FunctionComponent, memo } from "react";
// types
import { SearchButtonProps } from "../../types";
// styles
import "./SearchButton.scss";

const SearchButton: FunctionComponent<SearchButtonProps> = ({
  label,
  onClickHandler,
  isDisabled,
}) => {
  const searchButtonClassName = isDisabled ? "search-button-disabled" : "search-button";
  return (
    <button
      data-test-id="search-button"
      className={searchButtonClassName}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default memo(SearchButton);
