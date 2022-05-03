import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { fade, defaultState } from "../animation";
import Blank from "./Blank";

const AsideBar = ({
  isToggle,
  weatherData,
  setWeatherData,
  setIsToggle,
  mobileSize,
}) => {
  const [searchValue, setSearchValue] = useState(null);
  const [history, setHisory] = useState(
    JSON.parse(localStorage.getItem("history"))
      ? JSON.parse(localStorage.getItem("history"))
      : []
  );

  const handleHistory = (search) => {
    const id = history.length ? history[history.length - 1].id + 1 : 1;
    const searchObj = { id, search };
    const newHistory = [...history, searchObj];
    localStorage.setItem("history", JSON.stringify(newHistory));
    if (newHistory[4]) {
      const filterHistory = newHistory.filter(
        (value) => value.id !== newHistory[0].id
      );
      localStorage.setItem("history", JSON.stringify(filterHistory));
      return setHisory(filterHistory);
    }
    setHisory(newHistory);
  };

  const handleSearch = (search) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f756f7af453a49ebaae154848222804&q=${search}&aqi=no`
      )
      .then((data) => {
        setWeatherData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    handleHistory(search);
    setSearchValue("");
    setIsToggle(false);
  };

  return (
    <>
      <AnimatePresence>
        <Hide>
          {((isToggle && mobileSize) || !mobileSize) && (
            <AsideSection
              variants={mobileSize ? fade : defaultState}
              animate={"animate"}
              initial={"stop"}
              exit={"exit"}
            >
              <SearchBar>
                <input
                  type="text"
                  placeholder="Another Location"
                  value={searchValue || ""}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  autoFocus
                />
                <div
                  className="icon-box"
                  onClick={() => handleSearch(searchValue)}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    size={mobileSize ? "xs" : "xl"}
                  />
                </div>
              </SearchBar>
              <SearchHistory>
                {history.map((value, index) => (
                  <p
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={(e) => handleSearch(e.target.textContent)}
                  >
                    {value.search}
                  </p>
                ))}
              </SearchHistory>
              {weatherData && (
                <WeatherDetail>
                  <h3>Weather Details</h3>
                  <div>
                    <div className="result-box">
                      <p>Cloudly</p>
                      <p className="result">{weatherData.current.cloud}%</p>
                    </div>
                    <div className="result-box">
                      <p>Humidity</p>
                      <p className="result">{weatherData.current.humidity}%</p>
                    </div>
                    <div className="result-box">
                      <p>Wind</p>
                      <p className="result">
                        {weatherData.current.wind_kph}km/h
                      </p>
                    </div>
                  </div>
                </WeatherDetail>
              )}
            </AsideSection>
          )}
        </Hide>
      </AnimatePresence>
      <Blank isToggle={isToggle} mobileSize={mobileSize} />
    </>
  );
};

const AsideSection = styled(motion.section)`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 8;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 0 30px 10vh;
  background: rgba(23, 37, 58, 0.7);
  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-height: 400px) {
    overflow-x: scroll;
  }

  @media screen and (min-width: 850px) {
    right: 0;
    width: 35%;
    box-shadow: -2px -1px 8px 2px rgba(0, 0, 0, 0.4);
    z-index: 11;
    p {
      font-size: 1.1rem;
    }
  }
`;

const SearchBar = styled.div`
  padding-top: 5.7rem;
  display: flex;
  align-items: center;
  input {
    width: 80%;
    height: 20px;
    font-size: 1rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-right: 8%;
    color: rgba(255, 255, 255, 1);
    padding: 0.9rem 0;
    outline: none;
  }
  .icon-box {
    position: absolute;
    cursor: pointer;
    top: 4.5rem;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightblue;
    width: 50px;
    height: 50px;
    @media screen and (min-width: 850px) {
      margin: 0;
      right: 0;
      top: 0;
      width: 125px;
      height: 125px;
    }
  }
  @media screen and (min-width: 850px) {
    margin-top: 0;
    font-size: 1.1rem;
    min-height: 125px;
  }
`;

const SearchHistory = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const WeatherDetail = styled.div`
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  h3 {
    font-size: 0.8rem;
    font-weight: 500;
    margin: 1.5rem 0;
    color: #f1f1f1;
    margin-bottom: 30px;
  }
  .result-box {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .result {
      color: #f1f1f1;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AsideBar;
