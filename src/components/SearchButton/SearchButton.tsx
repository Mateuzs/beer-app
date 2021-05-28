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
  const searachButtonClassName = isDisabled ? "search-button-disabled" : "search-button";
  return (
    <button className={searachButtonClassName} onClick={onClickHandler} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default memo(SearchButton);
