import './css.scss';
import main from 'lib/image/main.png';
import React from 'react';

function CheckPage() {
    return(
        <div className="check">
            <div className="check-content">
            <img src={main} alt={main}></img>

                <form className="check-area" name="apply" action="값을 보낼 주소" method="post">
                <h1>지원서 조회하기</h1>

                <div className="form-content"><label htmlFor="email">이메일</label>
                <input type="text" id="email" name="email" maxLength="30" />
                </div>

                <div className="form-content"><label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" maxLength="30" autocomplete="off" />
                </div>

                <div className="button-area">
                <input type="button" id="back" onClick={function(){window.history.back()}} value="뒤로가기" />
                <input type="submit" id="submit" value="조회하기" />
                </div>

                </form>
            </div>
        </div>
    );
}

export default CheckPage;