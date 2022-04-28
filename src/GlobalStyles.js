import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = () => {
  return <GlobleStyles></GlobleStyles>;
};

const GlobleStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
}

h1{
    font-family: 'Lobster', cursive;
    font-weight: 400;
}
`;

export default GlobalStyles;
