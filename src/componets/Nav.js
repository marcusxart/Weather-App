import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultState, line1, line2, line3 } from "../animation";

const Nav = ({ handleToggle, isToggle }) => {
  return (
    <NavStyled>
      <h1>The weather</h1>
      <Menu
        onClick={handleToggle}
        variants={defaultState}
        animate={"animate"}
        initial={"stop"}
      >
        <Line variants={line1} animate={isToggle ? "animate" : "stop"} />
        <Line variants={line3} animate={isToggle ? "animate" : "stop"} />
        <Line variants={line2} animate={isToggle ? "animate" : "stop"} />
      </Menu>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 12;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  color: white;
  @media screen and (max-height: 400px) {
    min-height: 15vh;
  }
  @media screen and (min-width: 850px) {
    padding: 0 80px;
  }
`;
const Menu = styled(motion.div)`
  overflow: hidden;
  @media screen and (min-width: 850px) {
    visibility: hidden;
  }
`;
const Line = styled(motion.div)`
  height: 2.5px;
  width: 30px;
  margin: 7px 0;
  background: #ffffff;
  opacity: 0.5;
`;

export default Nav;
