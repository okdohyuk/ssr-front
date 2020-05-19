import React from 'react';
import styled from 'styled-components';
import background from 'lib/image/background_2.png';

const BG = styled.div`
  background-color: #ffffff;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slide = styled.div``;

const Title = styled.h1`
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  line-height: 150px;
  font-size: 100px;

  @media screen and (max-device-width: 830px) {
    font-size: 50px;
    line-height: 100px;
  }
`;

const Contents = styled.span`
  font-size: 50px;
  line-height: 100px;
  color: #ffffff;

  @media screen and (max-device-width: 830px) {
    font-size: 30px;
    line-height: 50px;
  }

  @media screen and (max-device-width: 450px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

export default () => {
  return (
    <BG className="section">
      <Slide className="slide" data-anchor="slide1">
        <Title>ABOUT</Title>
        <Contents>
          저희 <b>시스템 보안 연구 동아리</b>는 10년이 넘는
          <br />
          역사를 자랑하는 <b>한세 최고의 동아리</b>로,
        </Contents>
      </Slide>
      <Slide className="slide" data-anchor="slide2">
        <Title>ABOUT</Title>
        <Contents>
          한세사이버보안고등학교 전공의 특색을 살려
          <br />
          <b>보안 관련 활동</b>을 하는 동아리입니다.
        </Contents>
      </Slide>
      <Slide className="slide" data-anchor="slide3">
        <Title>ABOUT</Title>
        <Contents>
          동아리 부원 각자의 적성에 맞는 분야를 찾아
          <br />
          발전시켜나가며 교내, 교외
          <b>대회 수상</b>을<br />
          목표로 활동하고 있습니다.
        </Contents>
      </Slide>
    </BG>
  );
};
