import React from 'react';
import styled from 'styled-components';
import apply from 'lib/image/apply.png';
import kakao from 'lib/image/kakao.png';
import facebook from 'lib/image/facebook.png';

const BG = styled.div``;

const Title = styled.h1`
  color: #ffe600;
  line-height: 150px;
  font-size: 75px;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;

  @media screen and (max-width: 900px) {
    font-size: 50px;
    line-height: 80px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 50px;
  line-height: 100px;

  @media screen and (max-width: 830px) {
    line-height: 50px;
    font-size: 30px;
  }
  @media screen and (max-width: 350px) {
    line-height: 50px;
    font-size: 25px;
  }
`;

const Move = styled.a``;

const MoveImg = styled.img`
  height: 150px;
  margin: 30px;

  @media screen and (max-width: 830px) {
    height: 110px;
    margin: 5px;
  }
  @media screen and (max-width: 350px) {
    height: 90px;
  }
`;

export default () => (
  <BG className="section">
    <Title>CONTACT</Title>
    <Text>SSR과 함께하고 싶으신가요?</Text>
    <Move href="#ssr">
      <MoveImg src={apply} alt={apply} />
    </Move>
    <Move
      target="_blank"
      rel="noreferrer noopener"
      href="https://open.kakao.com/o/sc28UTcc"
    >
      <MoveImg src={kakao} alt={kakao} />
    </Move>
    <Move
      target="_blank"
      rel="noreferrer noopener"
      href="https://www.facebook.com/hanseiSSR"
    >
      <MoveImg src={facebook} alt={facebook} />
    </Move>
  </BG>
);
