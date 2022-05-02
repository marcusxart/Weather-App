import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { dateAndTime } from "../utils";

const Content = ({ isToggle, weatherData }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  console.log(weatherData);

  useEffect(() => {
    if (weatherData) {
      const [date, time] = dateAndTime(weatherData.location.localtime);
      setDate(date);
      setTime(time);
    }
  }, [weatherData]);
  return (
    <>
      {weatherData && (
        <ContentStyled isToggle={isToggle}>
          <h2>{weatherData.current.temp_c}°</h2>
          <div className="description">
            <h3>{weatherData.location.name}</h3>
            <h4>{weatherData.location.country}</h4>
            <div>
              <p>{`${time} + ${date}`}</p>
            </div>
            <div className="icon">
              <img src={weatherData.current.condition.icon} alt="" />
              <p>{weatherData.current.condition.text}</p>
            </div>
          </div>
        </ContentStyled>
      )}
    </>
  );
};

const ContentStyled = styled.section`
  position: sticky;
  z-index: 3;
  display: flex;
  transition: filter 0.5s;
  ${(props) => (props.isToggle ? "filter: blur(10px);" : "filter: blur(0px)")};
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  text-align: left;
  @media screen and (max-height: 400px) {
    margin: 10px 0 0;
    padding-bottom: 100px;
  }
  h2 {
    width: 200px;
    font-size: 5rem;
    font-weight: 500;
    height: 110px;
  }
  .description {
    width: 200px;
    h3 {
      font-weight: 500;
      font-size: 2rem;
      height: 42px;
      margin-bottom: 5px;
    }
    p {
      font-size: 0.8rem;
    }
  }
  .icon {
    p {
      margin: 0;
    }
  }
`;

export default Content;
