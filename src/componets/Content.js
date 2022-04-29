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
  min-height: 90vh;
  padding-top: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 6rem;
    font-weight: 500;
    width: 50%;
  }
  .description {
    width: 50%;
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
