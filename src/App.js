import Home from "./pages/Home";
import React from "react";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
