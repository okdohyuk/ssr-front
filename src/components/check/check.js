import style from './check.module.scss';
import main from 'lib/image/main_black.png';
import React from 'react';

class CheckPage extends React.Component{
    render(){
    return(
        <div className={style.check}>
            <div className={style.checkContainer}>
                <div className={style.checkWrap}>

                <form className={style.checkForm} name="apply" action="값을 보낼 주소" method="post">
                <img className={style.ssrImg} src={main} alt={main}></img>
                <h1 className={style.title}>지원서 조회하기</h1>


                <div class={style.wrapInput}>
						<input class={style.input} type="text" name="email" required/>
						<span class={style.focusInput} data-placeholder="Email"></span>
					</div>

					<div class={style.wrapInput}>
						<input class={style.input} type="password" name="password" required/>
						<span class={style.focusInput} data-placeholder="Password"></span>
				</div>


                <button type="submit" id={style.submit} name="isSubmit">조회하기</button>

                </form>
                </div>
            </div>
        </div>
    );
    }
}

export default CheckPage;