import React from 'react';
import styled from 'styled-components';
import background from 'lib/image/background_4.jpg';
import club from 'lib/image/club.png';
import club2 from 'lib/image/club_2.png';

const BG = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slide = styled.div``;

const Title = styled.h1`
  width: 750px;
  margin-left: auto;
  text-align: start;
  margin-right: auto;
  line-height: 100px;
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  font-size: 50px;

  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const Contents = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const Text = styled.span`
  width: 370px;
  line-height: 70px;
  text-align: start;
  color: #ffffff;
  font-size: 50px;

  @media screen and (max-width: 900px) {
    width: unset;
    margin-top: 20px;
    line-height: 40px;
    text-align: center;
    font-size: 30px;
  }
`;

const Img = styled.img`
  width: 400px;
  height: 300px;

  @media screen and (max-width: 900px) {
    margin: 0 auto;
    width: 300px;
    height: 225px;
  }
`;

export default () => {
  return (
    <BG className="section">
      <Slide className="slide" data-anchor="slide1">
        <Title>Benefit</Title>
        <Contents>
          <Text>
            누구보다 화목한
            <br />
            동아리 분위기!
          </Text>
          <Img src={club2} alt={club2} />
        </Contents>
      </Slide>

      <Slide className="slide" data-anchor="slide2">
        <Title>Benefit</Title>
        <Contents>
          <Text>
            전공 실력
            <br />
            Upgrade!
          </Text>
          <Img src={club} alt={club} />
        </Contents>
      </Slide>

      <Slide className="slide" data-anchor="slide3">
        <Title>Benefit</Title>
        <Contents>
          <Text>
            선배들의 멋진
            <br />
            멘토링까지!
          </Text>
          <Img src={club} alt={club} />
        </Contents>
      </Slide>
    </BG>
  );
};
