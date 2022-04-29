import React from "react";
import styled from "styled-components";

const Content = ({ isToggle }) => {
  return (
    <ContentStyled isToggle={isToggle}>
      <h2>26c</h2>
      <div className="description">
        <h3>London</h3>
        <p>TIME AND DATE</p>
        <div className="icon">
          <p>icon</p>
          <p>sunny</p>
        </div>
      </div>
    </ContentStyled>
  );
};

const ContentStyled = styled.section`
  display: flex;
  transition: filter 0.5s;
  filter: ${(props) => (props.isToggle ? "blur(10px)" : "blur(0px)")};
  width: 100%;
  margin: 50% auto 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  @media screen and (max-height: 400px) {
    margin: 10px auto 0;
  }
  h2 {
    width: 180px;
    font-size: 6rem;
    font-weight: 500;
    height: 130px;
  }
  .description {
    width: 180px;
    h3 {
      font-weight: 500;
      font-size: 2rem;
      height: 42px;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }
  .icon {
    p {
      margin: 0;
    }
  }
`;

export default Content;
