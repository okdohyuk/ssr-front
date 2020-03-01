import './css.scss';
import main from 'lib/image/main.png';

import React from 'react';
import Select from 'react-select';

const fieldOptions = [
    { value: 'Forensic', label: 'Forensic' },
    { value: 'Pwnable', label: 'Pwnable' },
    { value: 'Web Hacking', label: 'Web Hacking' },
    { value: 'Web FrontEnd Development', label: 'Web FrontEnd Development' },
    { value: 'BackEnd Development', label: 'BackEnd Development' },
    { value: 'App Development', label: 'App Development' },
];

const gradeOptions = [
    { value: '1', label: '1학년' },
    { value: '2', label: '2학년' },
];

const majorOptions = [
    { value: 'I', label: '정보보안계열' },
    { value: 'N', label: 'USN보안과' },
    { value: 'H', label: '해킹보안과' },
];

const classNumOptions = [
    { value: '1', label: '1반' },
    { value: '2', label: '2반' },
    { value: '3', label: '3반' },
    { value: '4', label: '4반' },
    { value: '5', label: '5반' },
];

const studentNumOptions = [
    { value: '1', label: '1번' },
    { value: '2', label: '2번' },
    { value: '3', label: '3번' },
    { value: '4', label: '4번' },
    { value: '5', label: '5번' },
    { value: '6', label: '6번' },
    { value: '7', label: '7번' },
    { value: '8', label: '8번' },
    { value: '9', label: '9번' },
    { value: '10', label: '10번' },
    { value: '11', label: '11번' },
    { value: '12', label: '12번' },
    { value: '13', label: '13번' },
    { value: '14', label: '14번' },
    { value: '15', label: '15번' },
    { value: '16', label: '16번' },
    { value: '17', label: '17번' },
    { value: '18', label: '18번' },
    { value: '19', label: '19번' },
    { value: '20', label: '20번' },
    { value: '21', label: '21번' },
    { value: '22', label: '22번' },
    { value: '23', label: '23번' },
    { value: '24', label: '24번' },
    { value: '25', label: '25번' },
    { value: '26', label: '26번' },
    { value: '27', label: '27번' },
    { value: '28', label: '28번' },
    { value: '29', label: '29번' },
    { value: '30', label: '30번' },
];

class ApplyPage extends React.Component {
    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠나실건가요?');
    }
    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

    state = {
        isClearable: false,
        isLoading: false,
        isRtl: false,
        isSearchable: false,
    };

    
    render() {
    const {
        isClearable,
        isSearchable,
        isLoading,
        isRtl,
    } = this.state;
    return(
        <div className="apply">
            <div className="apply-content">
                <img src={main} alt={main}></img>
                <form className="apply-area" name="apply" action="값을 보낼 주소" method="post">

                <div className="select-table">
                    <div className="select-table-row">
                <Select
                    name="field"
                    options={fieldOptions}
                    placeholder="분야 선택"
                    className="select"
                    isRtl={isRtl}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                />
                <Select
                    name="grade"
                    options={gradeOptions}
                    placeholder="학년 선택"
                    className="select"
                    isRtl={isRtl}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                />
                <Select
                    name="major"
                    options={majorOptions}
                    placeholder="학과 선택"
                    className="select"
                    isRtl={isRtl}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                /></div>
                <div className="select-table-row">
                <Select
                    name="classNum"
                    options={classNumOptions}
                    placeholder="반 선택"
                    className="select"
                    isRtl={isRtl}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                />
                <Select
                    name="studentNum"
                    options={studentNumOptions}
                    placeholder="번호 선택"
                    className="select"
                    isRtl={isRtl}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                />
                <input name="name" id="name" placeholder="이름을 입력하세요" type="text" maxLength="10" />
                </div>
                </div>
                
                <div className="account-table">
                <div className="account-cell"><label htmlFor="email">이메일</label>
                <input type="text" id="email" name="email" maxLength="30" />
                </div>

                <div className="account-cell"><label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" maxLength="30" />
                </div>
                </div>

                <div className="form-content"><label htmlFor="content">자신에 대해 소개해주세요.</label>
                <textarea id="content" name="content" maxLength="500" placeholder="자기소개, 지원동기, 각오 등을 적어주세요!"></textarea>
                </div>


                <div className="button-area">
                <input type="button" id="back" onClick={function(){window.history.back()}} value="뒤로가기" />
                <input type="submit" id="submit" name="isSubmit" value="등록하기" />
                </div>
                </form>
            </div>
        </div>
    );
    }
}

export default ApplyPage;