import React, { useContext } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { MyStore } from "./context/MyStore";
import {ContextProvider} from "./context/MyStore";

const App = () => {

  console.log("App component rendered");

  return (
    <div>
      <ContextProvider>
        <Home />
      </ContextProvider>
      <About />
      <Contact />
    </div>
  );
};

export default App;
