import style from './check.module.scss';
import main from 'lib/image/main.png';
import React from 'react';

class CheckPage extends React.Component{
    render(){
    return(
        <div className={style.check}>
            <div className={style.checkContent}>
            <img className={style.ssrImg} src={main} alt={main}></img>

                <form className={style.checkArea} name="apply" action="값을 보낼 주소" method="post">
                <h1 className={style.title}>지원서 조회하기</h1>

                <div className={style.checkForm}><label htmlFor="email">이메일</label>
                <input type="text" id={style.email} name="email" maxLength="30" />
                </div>

                <div className={style.checkForm}><label htmlFor="password">비밀번호</label>
                <input type="password" id={style.password} name="password" maxLength="30" autocomplete="off" />
                </div>

                <div className={style.buttonArea}>
                <button type="button" id={style.back} onClick={function(){window.history.back()}}>뒤로가기</button>
                <button type="submit" id={style.submit} name="isSubmit">등록하기</button>
                </div>

                </form>
            </div>
        </div>
    );
    }
}

export default CheckPage;