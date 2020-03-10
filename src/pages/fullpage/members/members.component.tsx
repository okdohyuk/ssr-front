import React from 'react';

import bin from 'lib/profile/profile_bin.png';
import back from 'lib/profile/profile_back.png';
import gyu from 'lib/profile/profile_gyu.png';
import you from 'lib/profile/profile_you.png';
import cha from 'lib/profile/profile_cha.png';
import oh from 'lib/profile/profile_oh.png';
import styled from 'styled-components';

const Title = styled.h1`
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

const MembersWrap = styled.div`
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

const Profile = styled.div`
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (max-device-width: 830px){
        margin-left: 10px;
        margin-right: 10px;
    }

    img {
        height: 150px;
        border-radius: 100%;
    }

    h2 {
        font-weight: bold;
        color: #FFFFFF;
    }

    h3 {
        color: #FFFFFF;
    }
`;

const Section = styled.div`
    @media screen {
        height: auto!important;
    }
`;

export default function Members() {
    return(
        <Section className="section">
            <div className="slide" data-anchor="slide1">
                    <MembersWrap>
                    <Title>10th</Title>
                        <Profile>
                            <img src={bin} alt={bin}/>
                                <h2>정빈</h2>
                                <h3>부장, 앱 개발</h3>
                        </Profile>
                        <Profile>
                            <img src={back} alt={back}/>
                                <h2>김경백</h2>
                                <h3>차장, 서버 개발</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>김보민</h2>
                                <h3>수능</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>김성민</h2>
                                <h3>웹 프론트</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>이규선</h2>
                                <h3>서버 개발</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>윤영서</h2>
                                <h3>웹 해킹</h3>
                        </Profile>
                    </MembersWrap>
            </div>

            <div className="slide" data-anchor="slide2">
                <MembersWrap>
                <Title>11th</Title>
                        <Profile>
                            <img src={you} alt={you}/>
                                <h2>유도혁</h2>
                                <h3>부장, 웹 프론트</h3>
                        </Profile>
                        <Profile>
                            <img src={cha} alt={cha}/>
                                <h2>차주한</h2>
                                <h3>차장, 웹 해킹</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>이현서</h2>
                                <h3>앱 개발</h3>
                        </Profile>
                        <Profile>
                            <img src={oh} alt={oh}/>
                                <h2>오승민</h2>
                                <h3>웹 프론트</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>박준상</h2>
                                <h3>서버 개발</h3>
                        </Profile>
                        <Profile>
                            <img src={gyu} alt={gyu}/>
                                <h2>조영환</h2>
                                <h3>앱 개발</h3>
                        </Profile>
                    </MembersWrap>
            </div>
        </Section>
    );
}