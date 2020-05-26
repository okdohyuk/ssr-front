import React from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

const BG = styled.div``;

const Title = styled.h1`
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  line-height: 150px;
  font-size: 75px;

  @media screen and (max-width: 900px) {
    font-size: 50px;
    line-height: 100px;
  }
`;

const Contents = styled.div`
  width: 930px;
  height: 300px;
  font-size: 50px;
  line-height: 80px;
  overflow: visible;

  white-space: nowrap;
  color: #ffffff;

  @media screen and (max-width: 930px) {
    width: 555px;
    height: unset;
    font-size: 30px;
    line-height: 50px;
  }

  @media screen and (max-width: 555px) {
    width: 340px;
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 340px) {
    width: 340px;
    font-size: 14px;
    line-height: 30px;
  }
`;

export default () => {
  return (
    <BG className="section">
      <Title>ABOUT</Title>
      <TextLoop noWrap={false} mask={true} interval={4000}>
        <Contents>
          저희 <b>시스템 보안 연구 동아리</b>는 10년이 넘는
          <br />
          역사를 자랑하는 <b>한세 최고의 동아리</b>로,
        </Contents>
        <Contents>
          한세사이버보안고등학교 전공의 특색을 살려
          <br />
          <b>보안 관련 활동</b>을 하는 동아리입니다.
        </Contents>
        <Contents>
          동아리 부원 각자의 적성에 맞는 분야를
          <br />
          찾아 발전시켜나가며 교내, 교외
          <br />
          <b>대회 수상</b>을 목표로 활동하고 있습니다.
        </Contents>
      </TextLoop>
    </BG>
  );
};
