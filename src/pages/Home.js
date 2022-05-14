import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import styled from "styled-components";
import Content from "../componets/Content";
import AsideBar from "../componets/AsideBar";
import axios from "axios";
import MyVideo from "../componets/MyVideo";

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  const [mobileSize, setMobileSize] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setMobileSize(window.innerWidth < 860);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=f756f7af453a49ebaae154848222804&q=lagos&aqi=no"
      )
      .then((data) => {
        setWeatherData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HomeStyled>
      <Header isToggle={isToggle} handleToggle={handleToggle} />
      <Content isToggle={isToggle} weatherData={weatherData} />
      <AsideBar
        isToggle={isToggle}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        setIsToggle={setIsToggle}
        mobileSize={mobileSize}
      />
      <MyVideo />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export default Home;
