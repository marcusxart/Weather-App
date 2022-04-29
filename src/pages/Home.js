import React, { useState } from "react";
import Header from "../componets/Header";
import styled from "styled-components";
import Content from "../componets/Content";
import AsideBar from "../componets/AsideBar";
import axios from "axios";

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  axios
    .get(
      "http://api.weatherapi.com/v1/current.json?key=f756f7af453a49ebaae154848222804&q=abia&aqi=no"
    )
    .then((data) => {})
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <HomeStyled>
      <Header isToggle={isToggle} handleToggle={handleToggle} />
      <AsideBar isToggle={isToggle} setIsToggle={setIsToggle} />
      <Content isToggle={isToggle} />
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
  overflow: hidden;
`;

export default Home;
