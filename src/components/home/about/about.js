import './css.scss';
import React from 'react';

function About() {
    return(
        <div className="section about">
            <div className="slide" data-anchor="slide1">
                <h1 className="title1">ABOUT</h1>
                <span className="about-ssr">저희 <b>시스템 보안 연구 동아리</b>는 10년이 넘는<br/> 역사를 자랑하는 <b>한세 최고의 동아리</b>로,</span>
            </div>

            <div className="slide"data-anchor="slide2">
                <h1 className="title1">ABOUT</h1>
                <span className="about-ssr">한세사이버보안고등학교 전공의 특색을 살려<br/> <b>보안 관련 활동</b>을 하는 동아리입니다.</span>
            </div>

            <div className="slide" data-anchor="slide3">
                <h1 className="title1">ABOUT</h1>
                <span className="about-ssr">동아리 부원 각자의 적성에 맞는 분야를 찾아<br/> 발전시켜나가며 교내, 교외 <b>대회 수상</b>을<br/> 목표로 활동하고 있습니다.</span>
            </div>
        </div>
    );
}

export default About;