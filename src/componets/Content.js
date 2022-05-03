import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { dateAndTime } from "../utils";

const Content = ({ isToggle, weatherData }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

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
            <div className="titles">
              <h3>{weatherData.location.name}</h3>
              <h4>{weatherData.location.country}</h4>
              <div className="time">
                <p>{`${time} + ${date}`}</p>
              </div>
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
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
  margin-right: 20px;
  text-align: left;
  @media screen and (max-height: 400px) {
    margin: 10px 0 0;
    padding-bottom: 100px;
  }
  h2 {
    max-width: 300px;
    margin-right: 55px;
    font-size: 5rem;
    font-weight: 500;
  }
  .description {
    h3 {
      font-weight: 500;
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 850px) {
    width: 65%;
    align-items: flex-start;
    padding: 100px 0 0 80px;
    h2 {
      font-size: 8rem;
    }
    .description {
      width: 100%;
      h3 {
        font-size: 2.5rem;
      }
      h4 {
        font-size: 1.3rem;
      }
    }

    .time {
      margin-top: 20px;
      width: 100%;
      p {
        font-size: 1rem;
      }
    }
    .icon {
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-evenly;
    h2 {
      margin-right: 3%;
      height: 145px;
    }
    .description {
      display: flex;
      width: 100%;
      .titles {
        margin-right: 3%;
      }
      .icon {
        margin-top: 8px;
        P {
          margin-left: 23px;
        }
        img {
          width: 100px;
        }
      }
    }
  }
`;

export default Content;
