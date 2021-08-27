import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import KombuchaList from "./KombuchaList";

function App(){
  return (
    <React.Fragment>
      <Header />
      <Subheader />
      <KombuchaList />
    </React.Fragment>
  );
}

export default App;