import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { fade } from "../animation";

const AsideBar = ({ isToggle, weatherData, setWeatherData, setIsToggle }) => {
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
    <AnimatePresence>
      {isToggle && (
        <AsideSection
          variants={fade}
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
            <div className="icon-box" onClick={() => handleSearch(searchValue)}>
              <FontAwesomeIcon icon={faSearch} />
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
          <>
            {weatherData && (
              <WeatherDetail>
                <h3>Weather Details</h3>
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
                  <p className="result">{weatherData.current.wind_kph}km/h</p>
                </div>
              </WeatherDetail>
            )}
          </>
        </AsideSection>
      )}
    </AnimatePresence>
  );
};

const AsideSection = styled(motion.section)`
  position: fixed;
  z-index: 8;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 10vh 30px 10%;
  background: rgba(23, 37, 58, 0.7);
  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-height: 400px) {
    padding-top: 15vh;
    overflow-x: scroll;
  }
`;

const SearchBar = styled.div`
  display: flex;
  margin-top: 5px;
  input {
    width: 80%;
    height: 20px;
    font-size: 1rem;
    background: transparent;
    border: none;
    margin-top: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-right: 8%;
    color: rgba(255, 255, 255, 1);
    padding: 0.9rem 0;
    outline: none;
  }
  .icon-box {
    position: absolute;
    cursor: pointer;
    top: 10vh;
    margin-top: 5px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightblue;
    width: 50px;
    height: 50px;
    svg {
      opacity: 0.5;
    }
  }
`;

const SearchHistory = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-height: 30vh;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  p {
    margin: 10px 0;
  }
`;

const WeatherDetail = styled.div`
  min-height: 35vh;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  h3 {
    font-size: 0.8rem;
    font-weight: 500;
    margin: 1.5rem 0;
    color: #f1f1f1;
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

export default AsideBar;
