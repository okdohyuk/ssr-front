import './css.scss';
import gyu from 'lib/profile/profile_gyu.png';
import React from 'react';

function About2() {
    return(
        <div className="section about2">
            <div className="slide" data-anchor="slide1">
                <h1 className="title2">10th</h1>
                    <div className="members">
                        <div className="profile profile_1">
                            <img src={gyu} alt={gyu}/>
                                <h2>정빈</h2>
                                <h3>부장, 앱 개발</h3>
                        </div>
                        <div className="profile profile_2">
                            <img src={gyu} alt={gyu}/>
                                <h2>김경백</h2>
                                <h3>차장, 서버 개발</h3>
                        </div>
                        <div className="profile profile_3">
                            <img src={gyu} alt={gyu}/>
                                <h2>김보민</h2>
                                <h3>수능</h3>
                        </div>
                        <div className="profile profile_4">
                            <img src={gyu} alt={gyu}/>
                                <h2>김성민</h2>
                                <h3>웹 프론트</h3>
                        </div>
                        <div className="profile profile_5">
                            <img src={gyu} alt={gyu}/>
                                <h2>이규선</h2>
                                <h3>서버 개발</h3>
                        </div>
                        <div className="profile profile_6">
                            <img src={gyu} alt={gyu}/>
                                <h2>윤영서</h2>
                                <h3>웹 해킹</h3>
                        </div>
                    </div>
            </div>

            <div className="slide" data-anchor="slide2">
                <h1 className="title2">11th</h1>
                <div className="members">
                        <div className="profile profile_7">
                            <img src={gyu} alt={gyu}/>
                                <h2>유도혁</h2>
                                <h3>부장, 웹 프론트</h3>
                        </div>
                        <div className="profile profile_8">
                            <img src={gyu} alt={gyu}/>
                                <h2>차주한</h2>
                                <h3>차장, 웹 해킹</h3>
                        </div>
                        <div className="profile profile_9">
                            <img src={gyu} alt={gyu}/>
                                <h2>이현서</h2>
                                <h3>앱 개발</h3>
                        </div>
                        <div className="profile profile_10">
                            <img src={gyu} alt={gyu}/>
                                <h2>오승민</h2>
                                <h3>웹 프론트</h3>
                        </div>
                        <div className="profile profile_11">
                            <img src={gyu} alt={gyu}/>
                                <h2>박준상</h2>
                                <h3>서버 개발</h3>
                        </div>
                        <div className="profile profile_12">
                            <img src={gyu} alt={gyu}/>
                                <h2>조영환</h2>
                                <h3>앱 개발</h3>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default About2;