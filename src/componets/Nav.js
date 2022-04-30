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
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  color: white;
  h1 {
    font-size: 1.2rem;
  }
  @media screen and (max-height: 400px) {
    min-height: 15vh;
  }
`;
const Menu = styled(motion.div)`
  overflow: hidden;
`;
const Line = styled(motion.div)`
  height: 2.5px;
  width: 30px;
  margin: 7px 0;
  background: #ffffff;
  opacity: 0.5;
`;

export default Nav;
