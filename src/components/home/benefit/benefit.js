import './css.scss';
import club from 'lib/image/club.png';
import React from 'react';

function Benefit() {
    return(
        <div className="section benefit">
            <div className="slide" data-anchor="slide1">

                <h1 className="title2">Benefit</h1>
                <div className="benefit-area">
                <img src ={club} alt={club} />
                <span className="text">누구보다 화목한<br/>
                동아리 분위기!</span>

                </div>
            </div>
            <div className="slide" data-anchor="slide2">
                <h1 className="title2">Benefit</h1>
                <div className="benefit-area">
                <img src ={club} alt={club} />
                <span className="text">전공 실력 Upgrade!</span>
                </div>
            </div>
            <div className="slide" data-anchor="slide3">
                <h1 className="title2">Benefit</h1>
                <div className="benefit-area">
                <img src ={club} alt={club} />
                <span className="text">매주 월화금<br/>
                방과후에<br/>
                남아 멘토링까지!</span>
                </div>
            </div>
        </div>
    );
}

export default Benefit;