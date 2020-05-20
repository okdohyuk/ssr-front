import React from 'react';
import styled from 'styled-components';
import background from 'lib/image/background_2.jpg';
import bin from 'lib/profile/profile_bin.png';
import back from 'lib/profile/profile_back.png';
import you from 'lib/profile/profile_you.png';
import cha from 'lib/profile/profile_cha.png';
import oh from 'lib/profile/profile_oh.png';
import kim from 'lib/profile/profile_kim.png';
import kimbo from 'lib/profile/profile_kimbo.png';
import jo from 'lib/profile/profile_jo.png';
import lee from 'lib/profile/profile_lee.png';
import yun from 'lib/profile/profile_yun.png';
import seon from 'lib/profile/profile_seon.png';
import min from 'lib/profile/profile_min.png';
import pak from 'lib/profile/profile_pak.png';

const Section = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 600px) {
    height: auto !important;
  }
`;

const Slide = styled.div``;

const Title = styled.h1`
  margin-left: 15px;
  text-align: start;
  line-height: 100px;
  color: #ffe600;
  text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
  font-size: 50px;

  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;

const MembersWrap = styled.div`
  width: 830px;
  margin: 0 auto;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  width: 160px;
  margin: 10px 10px 40px 10px;
  color: #ffffff;
`;

const Img = styled.img`
  height: 150px;
  border-radius: 100%;
`;

const Name = styled.h2``;

const Field = styled.h3``;

export default () => {
  return (
    <Section className="section">
      <Slide className="slide" data-anchor="slide1">
        <MembersWrap>
          <Title>10th</Title>
          <ProfileWrap>
            <Profile>
              <Img src={bin} alt={bin} />
              <Name>정빈</Name>
              <Field>부장, 앱 개발</Field>
            </Profile>
            <Profile>
              <Img src={back} alt={back} />
              <Name>김경백</Name>
              <Field>차장, 서버 개발</Field>
            </Profile>
            <Profile>
              <Img src={kimbo} alt={kimbo} />
              <Name>김보민</Name>
              <Field>
                수능준비중 +<br /> 자칭 한예슬
              </Field>
            </Profile>
            <Profile>
              <Img src={min} alt={min} />
              <Name>김성민</Name>
              <Field>웹 프론트</Field>
            </Profile>
            <Profile>
              <Img src={seon} alt={seon} />
              <Name>이규선</Name>
              <Field>서버 개발</Field>
            </Profile>
            <Profile>
              <Img src={yun} alt={yun} />
              <Name>윤영서</Name>
              <Field>웹 해킹</Field>
            </Profile>
          </ProfileWrap>
        </MembersWrap>
      </Slide>
      <Slide className="slide" data-anchor="slide2">
        <MembersWrap>
          <Title>11th</Title>
          <ProfileWrap>
            <Profile>
              <Img src={you} alt={you} />
              <Name>유도혁</Name>
              <Field>부장, 프론트 개발</Field>
            </Profile>
            <Profile>
              <Img src={cha} alt={cha} />
              <Name>차주한</Name>
              <Field>차장, 웹 해킹</Field>
            </Profile>
            <Profile>
              <Img src={lee} alt={lee} />
              <Name>이현서</Name>
              <Field>앱 개발</Field>
            </Profile>
            <Profile>
              <Img src={oh} alt={oh} />
              <Name>오승민</Name>
              <Field>웹 프론트</Field>
            </Profile>
            <Profile>
              <Img src={pak} alt={pak} />
              <Name>박준상</Name>
              <Field>서버 개발</Field>
            </Profile>
            <Profile>
              <Img src={jo} alt={jo} />
              <Name>조영환</Name>
              <Field>앱 개발</Field>
            </Profile>
            <Profile>
              <Img src={kim} alt={kim} />
              <Name>김정진</Name>
              <Field>포너블</Field>
            </Profile>
          </ProfileWrap>
        </MembersWrap>
      </Slide>
    </Section>
  );
};
