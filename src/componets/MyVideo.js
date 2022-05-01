import React from "react";
import styled from "styled-components";
import sunsriseSmall from "../video/sunrise-small.mp4";
import sunsriseSmallWebm from "../video/sunrise-small.webm";
import sunsriseBig from "../video/sunrise-big.mp4";
import sunsriseBigWebm from "../video/sunrise-big.mp4";

const MyVideo = () => {
  return (
    <div>
      <Video autoPlay loop muted>
        <source
          src={sunsriseSmall}
          type="video/mp4"
          media="all and (max-width: 480px)"
        />
        <source
          src={sunsriseSmallWebm}
          type="video/webm"
          media="all and (max-width: 480px)"
        />
        <source src={sunsriseBig} type="video/mp4" />
        <source src={sunsriseBigWebm} type="video/webm" />
      </Video>
    </div>
  );
};

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default MyVideo;
