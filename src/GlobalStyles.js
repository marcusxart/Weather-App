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
    font-size: 1.2rem;
    @media screen and (min-width: 850px) {
    font-size:1rem;
  }
}
h2,
h3,
h4,
p{
    color: #f5f5f5;
    letter-spacing:0.5px ;
}

input{
    &::-webkit-input-placeholder {
        color:white;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
            @media screen and (min-width: 850px) {
            font-size: 1.1rem;
        }
    }

    &::-moz-placeholder {
        color:white;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
        @media screen and (min-width: 850px) {
            font-size: 1.1rem;
        }
    }

    &::-ms-placeholder {
        color:white;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
        @media screen and (min-width: 850px) {
            font-size: 1.1rem;
        }
    }

    &::placeholder {
        color:white;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
        @media screen and (min-width: 850px) {
            font-size: 1.1rem;
        }
    }
}

`;

export default GlobalStyles;
