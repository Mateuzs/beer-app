// external
import { FunctionComponent } from "react";
// components
import { BeerSearchContainer, DisplayRandomBeerContainer, NavBar } from "./components";
// styles
import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <NavBar />
      <DisplayRandomBeerContainer />
      <BeerSearchContainer />
    </div>
  );
};

export default App;
