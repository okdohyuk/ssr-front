import React from 'react';

import background from 'lib/image/background_1.png';
import main from 'lib/image/main.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div `
    background-color: #ffffff;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Img = styled.img `
    height: 260px;

    @media screen and (max-device-width: 630px){
        height: 200px;
        margin-bottom: 50px;
    }
`;

const LinkWrap = styled.div ``;

const Button = styled.button `
    margin: 30px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #FFE600;
    font-weight: bold;
    font-size: 20px;
`;

export default function SSR() {
    return (
        <Section className="section">
            <Img src={main} alt={main}/>
            <LinkWrap>
                <Link to="/apply">
                    <Button>지원서 작성하기</Button>
                </Link>
                <Link to="/check">
                    <Button>지원서 수정하기</Button>
                </Link>
            </LinkWrap>
        </Section>
    );
}