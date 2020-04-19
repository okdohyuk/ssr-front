import React, { useState } from 'react';
import styled from 'styled-components';
import background from 'lib/image/background_3.png';

const BG = styled.div`
  background-color: #ffffff;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-device-width: 830px) {
    height: auto !important;
  }
`;

const Title = styled.h1`
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  line-height: 150px;
  font-size: 100px;

  @media screen and (max-width: 830px) {
    font-size: 60px;
    line-height: 80px;
  }
`;

const CountWrap = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
`;

const Count = styled.div`
  width: 200px;
  height: 120px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  color: #ffffff;
`;

const CountNum = styled.h5`
  font-size: 60px;
  line-height: 60px;

  @media screen and (max-width: 400px) {
    font-size: 50px;
  }
`;

const CountText = styled.p`
  font-size: 20px;
  line-height: 30px;

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

const Content = styled.div``;

const Button = styled.span``;

const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 100px;
  text-decoration: underline;
  text-underline-position: under;
  color: #ffffff;
`;

const ProductText = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 10px;
  font-size: 18px;
  color: #ffffff;
  animation-duration: 0.75s;
  animation-name: bounceIn;

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @media screen and (max-width: 999px) {
    width: 100%;
    font-size: 13px;
  }
`;

export default function Product() {
  const [content, setContent] = useState(true);
  return (
    <BG className="section">
      <Title>PRODUCT</Title>
      <CountWrap>
        <Count
          style={{
            backgroundColor: '#F24949',
          }}
        >
          <CountNum>50</CountNum>
          <CountText>수상 횟수</CountText>
        </Count>
        <Count
          style={{
            backgroundColor: '#2955F0',
          }}
        >
          <CountNum>40+</CountNum>
          <CountText>달성한 성과</CountText>
        </Count>
        <Count
          style={{
            backgroundColor: '#8949F2',
          }}
        >
          <CountNum>12</CountNum>
          <CountText>수료생 배출</CountText>
        </Count>
      </CountWrap>
      <Content>
        {content ? (
          <ProductTitle>
            <Button onClick={() => setContent(false)}>펼쳐보기</Button>
          </ProductTitle>
        ) : (
          <ProductText>
            제5회 한세사이버보안고등학교 교내해킹방어대회 1위, 3위 , 6위 수상
            제4회 한세사이버보안고등학교 교내해킹방어대회 1~4위, 6위 수상 제3회
            한세사이버보안고등학교 교내해킹방어대회 1~6위 수상 제2회
            한세사이버보안고등학교 교내해킹방어대회 1~6위 수상 제1회
            한세사이버보안고등학교 교내해킹방어대회 1~6위 수상 2018
            사이버가디언즈 동상 2017 사이버가디언즈 동상 2018 코드게이트
            해킹시연 공모전 특별상 2019 CodeGate Junior 국제 해킹방어대회 본선
            진출 2018 CodeGate Junior 국제 해킹방어대회 본선 진출 2017 CodeGate
            Junior 국제 해킹방어대회 본선 진출 2016 CodeGate Junior 국제
            해킹방어대회 본선 진출 2014 CodeGate Junior 국제 해킹방어대회 본선
            진출 AhnLab Security Wave 2012 Qualified 등급 취득 2016 순천향대
            청소년 정보보호 페스티벌 본선 진출 2014 순천향대 청소년 정보보호
            페스티벌 우수상 2019 SK Smarteen App Challenge 가작상 2016 SK
            Smarteen App Challenge 가작상 2014 SK Smarteen App Challenge 장려상
            제 14회 Appjam 장려상 제 17회 Appjam 장려상 제 18회 Appjam 장려상 제
            14회 중고생 정보보호 올림피아드 금상 제 9회 중고생 정보보호
            올림피아드 금, 동상 제 8회 중고생 정보보호 올림피아드 금상 제 4회
            HolyShield Hacking Contest 금상 제 2회 청소년 화이트해커 경진대회
            동상 제 17회 해킹캠프 CTF 3위 제 14회 해킹캠프 CTF 1위 2017 호서대
            정보보호 경진대회 1위 2018 호서대 정보보호 경진대회 1위 영재교육원
            주최 CTF 개인전 2위 2016 화이트햇 콘테스트 최우수상 BOB(Best of
            Best) 수료생 4명 배출 고려대 정보보호 영재교육원생 1명 배출 2014
            인하대 NewHeart 해킹대회 동상 한국교육학술정보원 주최 CTF 최우수상
            사이버 보안 전문 단원 (미래창조과학부) 서울여대 정보보호
            영재교육원생 7명 배출 등
          </ProductText>
        )}
      </Content>
    </BG>
  );
}
