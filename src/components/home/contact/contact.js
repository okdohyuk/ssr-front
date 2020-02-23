import './css.scss';
import apply from 'lib/image/apply.png';
import kakao from 'lib/image/kakao.png';
import facebook from 'lib/image/facebook.png';
import React from 'react';

function Contact() {
    return(
        <div className="section contact">
            <h1 className="title1">CONTACT</h1>
            <div className="text">SSR-과 함께하고 싶으신가요?</div>
            <div className="move">
                <a href="#ssr"><img src={apply} alt={apply} /></a>
                <a target="_blank" rel='noreferrer noopener' href="https://www.kakaocorp.com/service/KakaoTalk"><img src={kakao} alt={kakao} /></a>
                <a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/hanseiSSR"><img src={facebook} alt={facebook} /></a>
            </div>
        </div>
    );
}

export default Contact;