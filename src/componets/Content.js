import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <ContentStyled>
      <h2>26c</h2>
      <div>
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

  min-height: 60vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  h2 {
    font-size: 6rem;
    font-weight: 500;
  }
`;

export default Context;
