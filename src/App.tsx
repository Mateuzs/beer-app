// external
import { FunctionComponent, useState, useEffect } from "react";
// components
import {
  BeerSearchContainer,
  DisplayRandomBeerContainer,
  ErrorMessage,
  NavBar,
} from "./components";
// constants, utils
import { ERROR_MESSAGE } from "./constants";

// styles
import "./App.scss";

const App: FunctionComponent = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    let enableDataFetchingWithDelay: NodeJS.Timeout;

    if (isFetching === true) {
      enableDataFetchingWithDelay = setTimeout(() => {
        setIsFetching(false);
      }, 1000);
    }

    return () => clearTimeout(enableDataFetchingWithDelay);
  }, [isFetching]);

  return (
    <div className="App-container">
      {!isError ? (
        <>
          <NavBar />
          <DisplayRandomBeerContainer
            setIsError={setIsError}
            setIsFetching={setIsFetching}
            isFetching={isFetching}
          />
          <BeerSearchContainer
            setIsError={setIsError}
            setIsFetching={setIsFetching}
            isFetching={isFetching}
          />
        </>
      ) : (
        <ErrorMessage errorMessage={ERROR_MESSAGE} />
      )}
    </div>
  );
};

export default App;
