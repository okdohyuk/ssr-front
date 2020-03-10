import React from 'react';

import background from 'lib/image/background.png';
import main from 'lib/image/main.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;

const SSRImg = styled.img`
    height: 260px;

    @media screen and (max-device-width: 630px){
        height: 200px;
        margin-bottom: 50px;
    }
`;

const Button = styled.button`
    margin: 30px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #FFE600;
    font-weight: bold;
    font-size: 20px;
`;



class SSR extends React.Component {
render(){
    return(
        <Section className="section">
            <SSRImg src={main} alt={main} />
            <div>
                <Link to="/apply"><Button>지원서 작성하기</Button></Link>
                <Link to="/check"><Button>지원서 수정하기</Button></Link>
            </div>
        </Section>
    );
}
}

export default SSR;