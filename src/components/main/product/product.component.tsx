import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const BG = styled.div`
  background-color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-device-width: 830px) {
    height: auto !important;
  }
`;

const Title = styled.h1`
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333,
    2px 1px 2px gray;
  font-size: 100px;

  @media screen and (max-width: 830px) {
    font-size: 60px;
    line-height: 80px;
  }
`;

const Video = styled(YouTube)`
  width: 900px;
  height: 600px;

  @media screen and (max-width: 900px) {
    width: 700px;
    height: 400px;
  }

  @media screen and (max-width: 700px) {
    width: 450px;
    height: 300px;
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
