// external
import { FunctionComponent, memo } from "react";
// constansts, utils
import { APP_HEADER } from "../../constants";
// styles
import "./NavBar.scss";

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      <p data-test-id="nav-bar-text" className="nav-bar-title">
        {APP_HEADER}
      </p>
    </div>
  );
};

export default memo(NavBar);
