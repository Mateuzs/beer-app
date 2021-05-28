// external
import { FunctionComponent, memo } from "react";
// types
import { ErrorMessageProps } from "../../types";
// styles
import "./ErrorMessage.scss";

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ errorMessage }) => (
  <div className="error-message-container">
    <h3 className="error-message">{errorMessage}</h3>
  </div>
);

export default memo(ErrorMessage);
