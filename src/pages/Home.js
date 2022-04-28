import React from "react";
import Header from "../componets/Header";
import styled from "styled-components";
import Content from "../componets/Content";

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Content />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  background: rgb(172, 202, 221);
  background: linear-gradient(
    0deg,
    rgba(172, 202, 221, 1) 15%,
    rgba(55, 150, 209, 1) 90%
  );
  height: 100vh;
`;

export default Home;
