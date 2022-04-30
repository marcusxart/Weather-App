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
h2,
h3,
p{
    color: #ffffff;
    letter-spacing:0.5px ;
}

`;

export default GlobalStyles;
