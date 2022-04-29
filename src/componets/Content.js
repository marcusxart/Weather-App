import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <ContentStyled>
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
  height: 100%;
  width: 50%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  h2 {
    font-size: 6rem;
    font-weight: 500;
    width: 100%;
    height: 130px;
  }
  .description {
    width: 100%;
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
