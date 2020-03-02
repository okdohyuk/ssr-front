import './product.scss';
import React from 'react';

class Product extends React.Component {
render(){
    return(
        <div className="section">
            <h1 className="title1">PRODUCT</h1>
            <div className="countArea">
                <div className="count count1">50<p>수상 횟수</p></div>
                <div className="count count2">40+<p>달성한 성과</p></div>
                <div className="count count3">12<p>수료생 배출</p></div>
            </div>
            <details>
            <summary>펼쳐보기</summary>
            제5회 한세사이버보안고등학교 교내해킹방어대회 1위, 3위 , 6위 수상 제4회 한세사이버보안고등학교 교내해킹방어대회 1~4위, 6위 수상 제3회 한세사이버보안고등학교 교내해킹방어대회 1~6위 수상 제2회 한세사이버보안고등학교 교내해킹방어대회 1~6위 수상 제1회 한세사이버보안고등학교 교내해킹방어대회 1~6위 수상 2018 사이버가디언즈 동상 2017 사이버가디언즈 동상 2018 코드게이트 해킹시연 공모전 특별상 2019 CodeGate Junior 국제 해킹방어대회 본선 진출 2018 CodeGate Junior 국제 해킹방어대회 본선 진출 2017 CodeGate Junior 국제 해킹방어대회 본선 진출 2016 CodeGate Junior 국제 해킹방어대회 본선 진출 2014 CodeGate Junior 국제 해킹방어대회 본선 진출 AhnLab Security Wave 2012 Qualified 등급 취득 2016 순천향대 청소년 정보보호 페스티벌 본선 진출 2014 순천향대 청소년 정보보호 페스티벌 우수상 2019 SK Smarteen App Challenge 가작상 2016 SK Smarteen App Challenge 가작상 2014 SK Smarteen App Challenge 장려상 제 14회 Appjam 장려상 제 17회 Appjam 장려상 제 18회 Appjam 장려상 제 14회 중고생 정보보호 올림피아드 금상 제 9회 중고생 정보보호 올림피아드 금, 동상 제 8회 중고생 정보보호 올림피아드 금상 제 4회 HolyShield Hacking Contest 금상 제 2회 청소년 화이트해커 경진대회 동상 제 17회 해킹캠프 CTF 3위 제 14회 해킹캠프 CTF 1위 2017 호서대 정보보호 경진대회 1위 2018 호서대 정보보호 경진대회 1위 영재교육원 주최 CTF 개인전 2위 2016 화이트햇 콘테스트 최우수상 BOB(Best of Best) 수료생 4명 배출 고려대 정보보호 영재교육원생 1명 배출 2014 인하대 NewHeart 해킹대회 동상 한국교육학술정보원 주최 CTF 최우수상 사이버 보안 전문 단원 (미래창조과학부) 서울여대 정보보호 영재교육원생 7명 배출 등
            </details>
        </div>
    );
}
}

export default Product;