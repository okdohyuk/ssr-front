import React from 'react';

import background from 'lib/image/background_5.png';
import apply from 'lib/image/apply.png';
import kakao from 'lib/image/kakao.png';
import facebook from 'lib/image/facebook.png';
import styled from 'styled-components';

const Section = styled.div`
    background-color: #ffffff;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.h1`
    color: #FFE600;
    text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0   #333333, 0 -1px #333333;
    line-height: 150px;
    font-size: 100px;

    @media screen and (max-device-width: 830px){
    font-size: 50px;
    line-height: 80px;
    }
`;

const Text = styled.div`
    color: #FFFFFF;
    font-size: 50px;
    line-height:100px;

    @media screen and (max-width: 830px){
        line-height: 50px;
        font-size: 25px;
    }
`;

const MoveImg = styled.img`
    height: 150px;
    margin: 30px;
    
    @media screen and (max-width: 830px){
        height: 100px;
        margin: 5px;
    }
`;

export default function Contact() {
    return(
        <Section className="section">
            <Title>CONTACT</Title>
            <Text>SSR-과 함께하고 싶으신가요?</Text>
            <a href="#ssr"><MoveImg src={apply} alt={apply} /></a>
            <a target="_blank" rel='noreferrer noopener' href="https://www.kakaocorp.com/service/KakaoTalk">
                <MoveImg src={kakao} alt={kakao} />
            </a>
            <a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/hanseiSSR">
                <MoveImg src={facebook} alt={facebook} />
            </a>
        </Section>
    );
}