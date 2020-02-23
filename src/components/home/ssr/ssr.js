import './css.scss';
import main from 'lib/image/main.png';
import React from 'react';
import { Link } from 'react-router-dom';

function SSR() {
    return(
        <div className="section ssr">
            <img src={main} alt={main} />
            <div id="But">
                <Link to="/apply"><button>지원서 작성하기</button></Link>
                <Link to="/check"><button>지원서 수정하기</button></Link>
            </div>
        </div>
    );
}

export default SSR;