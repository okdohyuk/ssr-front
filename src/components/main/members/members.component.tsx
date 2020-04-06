import React from 'react';

import background from 'lib/image/background_2.png';
import bin from 'lib/profile/profile_bin.png';
import back from 'lib/profile/profile_back.png';
import gyu from 'lib/profile/profile_gyu.png';
import you from 'lib/profile/profile_you.png';
import cha from 'lib/profile/profile_cha.png';
import oh from 'lib/profile/profile_oh.png';
import kim from 'lib/profile/profile_kim.png';
import styled from 'styled-components';

const Section = styled.div `
    background-color: #ffffff;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen {
        height: auto!important;
    }
`;

const Slide = styled.div ``;

const Title = styled.h1 `
    width: 750px;
    margin-left: auto;
    text-align: start;
    margin-right: auto;
    line-height: 100px;
    color: #FFE600;
    text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0   #333333, 0 -1px #333333;
    font-size: 50px;

    @media screen and (max-device-width : 830px){
        width: 100%;
        text-align: center;
    }
`;

const MembersWrapTen = styled.div `
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    @media screen and (max-device-width: 830px){
        width: 100%;
        height: auto!important;
    }
`;

const MembersWrapEleven = styled.div `
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-device-width: 830px){
        width: 100%;
        height: auto!important;
    }
`;

const Profile = styled.div `
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (max-device-width: 830px){
        margin-left: 10px;
        margin-right: 10px;
    }
`;

const Img = styled.img `
    height: 150px;
    border-radius: 100%;
`;

const Name = styled.h2 `
    font-weight: bold;
    color: #FFFFFF;
`;

const Field = styled.h3 `
    color: #FFFFFF;
`;

export default function Members() {
    return (
        <Section className="section">
            <Slide className="slide" data-anchor="slide1">
                <Title>10th</Title>
                <MembersWrapTen>
                    <Profile>
                        <Img src={bin} alt={bin}/>
                        <Name>정빈</Name>
                        <Field>부장, 앱 개발</Field>
                    </Profile>
                    <Profile>
                        <Img src={back} alt={back}/>
                        <Name>김경백</Name>
                        <Field>차장, 서버 개발</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>김보민</Name>
                        <Field>수능 공부</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>김성민</Name>
                        <Field>웹 프론트</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>이규선</Name>
                        <Field>서버 개발</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>윤영서</Name>
                        <Field>웹 해킹</Field>
                    </Profile>
                </MembersWrapTen>
            </Slide>
            <Slide className="slide" data-anchor="slide2">
                <Title>11th</Title>
                <MembersWrapEleven>
                    <Profile>
                        <Img src={you} alt={you}/>
                        <Name>유도혁</Name>
                        <Field>부장, 웹 프론트</Field>
                    </Profile>
                    <Profile>
                        <Img src={cha} alt={cha}/>
                        <Name>차주한</Name>
                        <Field>차장, 웹 해킹</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>이현서</Name>
                        <Field>앱 개발</Field>
                    </Profile>
                    <Profile>
                        <Img src={oh} alt={oh}/>
                        <Name>오승민</Name>
                        <Field>웹 프론트</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>박준상</Name>
                        <Field>서버 개발</Field>
                    </Profile>
                    <Profile>
                        <Img src={gyu} alt={gyu}/>
                        <Name>조영환</Name>
                        <Field>앱 개발</Field>
                    </Profile>
                    <Profile>
                        <Img src={kim} alt={kim}/>
                        <Name>김정진</Name>
                        <Field>포너블</Field>
                    </Profile>
                </MembersWrapEleven>
            </Slide>
        </Section>
    );
}