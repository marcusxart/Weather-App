import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { fade } from "../animation";

const Blank = ({ isToggle, mobileSize }) => {
  return (
    <AnimatePresence>
      {((isToggle && mobileSize) || !mobileSize) && (
        <BlankStyled
          variants={fade}
          animate={"animate"}
          initial={"stop"}
          exit={"exit"}
        ></BlankStyled>
      )}
    </AnimatePresence>
  );
};

const BlankStyled = styled(motion.div)`
  position: fixed;
  z-index: 7;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  -o-backdrop-filter: blur(10px);
  -ms-backdrop-filter: blur(10px);
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 840px) {
    width: 35%;
  }
`;

export default Blank;
