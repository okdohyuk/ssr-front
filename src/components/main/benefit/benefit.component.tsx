import React from 'react';
import styled from 'styled-components';
import club2 from 'lib/image/club_2.jpg';

var ReactRotatingText = require('react-rotating-text');

const BG = styled.div`
  @media screen and (max-width: 900px) {
    background-color: #272727;
  }
`;

const Slide = styled.div``;

const Title = styled.h1`
  width: 50%;
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  font-size: 75px;

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Text = styled.div`
  width: 50%;
  height: 200px;
  padding: 10px;
  margin-top: 50px;

  font-size: 50px;
  color: #ffffff;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 830px) {
    font-size: 35px;
  }
  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

const WrapImg = styled.div`
  width: 50%;
  height: 100%;
  bottom: 0;
  right: 0;
  top: 0;
  position: absolute;
  box-shadow: inset 3px 3px 10px 0 #000000;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  z-index: -1;
  position: relative;
  opacity: 0.9;

  @media screen and (max-width: 900px) {
    opacity: 0.6;
  }
`;

const textArray = [
  '누구보다 화목한 동아리',
  '전공실력 Upgrade!',
  '교내 TOP 1 동아리',
  '다양한 분야에서 활동',
];

export default () => {
  return (
    <BG className="section">
      <Slide className="slide">
        <Title>Benefit</Title>
        <Text>
          <ReactRotatingText
            pause={3500}
            emptyPause={300}
            deletingInterval={20}
            items={textArray}
          />
        </Text>
        <WrapImg>
          <Img src={club2} alt={club2} />
        </WrapImg>
      </Slide>
    </BG>
  );
};
