import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const BG = styled.div``;

const Title = styled.h1`
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  font-size: 75px;

  @media screen and (max-width: 900px) {
    font-size: 50px;
    margin-bottom: 40px;
    line-height: 80px;
  }
`;

const Video = styled(YouTube)`
  width: 900px;
  height: 505px;

  @media screen and (max-width: 900px) {
    width: 700px;
    height: 395px;
  }

  @media screen and (max-width: 700px) {
    width: 450px;
    height: 254px;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    height: 260px;
  }
`;

export default () => {
  return (
    <BG className="section">
      <Title>PRODUCT</Title>
      <Video videoId="2_Ugw7Nh-00" />
    </BG>
  );
};
