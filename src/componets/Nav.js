import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <NavStyled>
      <h1>The weather</h1>
      <Menu>
        <Line />
        <Line />
        <Line />
      </Menu>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  color: white;
  h1 {
    font-size: 1.2rem;
  }
`;
const Menu = styled.div``;
const Line = styled.div`
  height: 2.5px;
  width: 30px;
  margin: 7px;
  background: #ffffff;
  opacity: 0.5;
`;

export default Nav;
