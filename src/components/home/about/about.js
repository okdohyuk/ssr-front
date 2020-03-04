import './about.scss';
import React from 'react';

class About extends React.Component {
render(){
    return(
        <div className="section">
            <div className="slide" data-anchor="slide1">
                <h1 className="title1">ABOUT</h1>
                <span className="aboutSSR">저희 <b>시스템 보안 연구 동아리</b>는 10년이 넘는<br/> 역사를 자랑하는 <b>한세 최고의 동아리</b>로,</span>
            </div>

            <div className="slide"data-anchor="slide2">
                <h1 className="title1">ABOUT</h1>
                <span className="aboutSSR">한세사이버보안고등학교 전공의 특색을 살려<br/> <b>보안 관련 활동</b>을 하는 동아리입니다.</span>
            </div>

            <div className="slide" data-anchor="slide3">
                <h1 className="title1">ABOUT</h1>
                <span className="aboutSSR">동아리 부원 각자의 적성에 맞는 분야를 찾아<br/> 발전시켜나가며 교내, 교외 <b>대회 수상</b>을<br/> 목표로 활동하고 있습니다.</span>
            </div>
            <div class="slide" data-anchor="slide4">
            <h1 class="title">
            <span>Hi, nice</span>
            <span>to see</span>
            <span>you here</span>
            </h1>

            <h2 class="title">
            <span>This is</span>
            <span>a long</span>
            <span>sub title</span>
            </h2>
            </div>
        </div>
    );
}
}

export default About;