import React, { useState } from 'react';
import axios from 'axios';

import main from 'lib/image/main.png';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { yellow } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';

const Form = styled.form `
    width: 100%;
    height: 100%;
    padding: 15px;
`;

const CardHeader = styled.div `
    padding: 12px;
    text-align: center;
`;

const Img = styled.img `
    height: 200px;
`;

const Header = styled.h4``;

const CardMain = styled(Card)`
    max-width: 1000px;
    margin: auto;
    border-radius: 0 !important;
`;

const AccountWrap = styled.div `
    margin-bottom: 20px;
`;

const FieldWrap = styled.div ``;

const Field = styled.div `
    margin-top: 1px;
`;

const InputWrap = styled(FormControl)`
    width: 48%;
`;
const InputWrapR = styled(FormControl)`
    width: 48%;
    float: right;
`;

const Count = styled.div`
    text-align: center;
`;

const SaveBtn = withStyles((theme : Theme) => ({
    root: {
        color: theme
            .palette
            .getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        fontSize: '20px',
        fontWeight: 'bolder',
        '&:hover': {
            backgroundColor: yellow[600]
        }
    }
}))(Button);

const SubBtn = withStyles((theme : Theme) => ({
    root: {
        color: theme
            .palette
            .getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        fontSize: '20px',
        fontWeight: 'bolder',
        '&:hover': {
            backgroundColor: yellow[600]
        }
    }
}))(Button);

const InputPhone = styled(TextField)``;

const InputPw = styled(TextField)``;

const InputName = styled(TextField)``;

const SelField = styled(Select)``;

const SelClassNum = styled(Select)``;

const SelStudentNum = styled(Select)``;

const InputContent = styled(TextField)``;

export default function ApplyComponent() {
    document.title = "SSR 지원하기";
    const [state, setState] = useState < {
        phone: string;
        password: string;
        name: string;
        field: string;
        classNum: string;
        studentNum: string;
        content: string;
    } > ({
        phone: '',
        password: '',
        name: '',
        field: '',
        classNum: '',
        studentNum: '',
        content: ''
    });
    const [isSubmit, setIsSubmit] = useState(true);

    const handleChange = (name : keyof typeof state) => (
        event : React.ChangeEvent < {
            value: unknown
        } >,
    ) => {
        setState({
            ...state,
            [name]: event.target.value
        });
    };

    const handleSubmit = () => {
        if (state.name.trim() && state.phone.trim() && state.password.trim() && state.content.trim() && state.field.trim() && state.classNum.trim() && state.studentNum.trim()) {
            post();
        } else {
            alert("빈칸을 모두 채워주세요.");
        }
    }

    const post = () => {
        axios
            .post('http://3.34.45.51:8000/api/application', {
                phone: state.phone,
                classNum: state.classNum,
                studentNum: state.studentNum,
                name: state.name,
                field: state.field,
                content: state.content,
                password: state.password,
                isSubmit: isSubmit
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        if (isSubmit) {
            alert("지원서 등록이 완료되었습니다!");
        } else {
            alert("지원서 저장이 완료되었습니다!");
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <CardHeader>
                <Img src={main} alt={main}/>
            </CardHeader>
            <CardMain>
                <CardContent>
                    <AccountWrap>
                        <Header>계정</Header>
                        <hr/>
                        <InputWrap>
                            <InputPhone
                                label="전화번호"
                                value={state.phone}
                                onChange={handleChange('phone')}
                            />
                        </InputWrap>
                        <InputWrapR>
                            <InputPw
                                label="비밀번호"
                                type="password"
                                value={state.password}
                                onChange={handleChange('password')}
                            />
                        </InputWrapR>
                    </AccountWrap>
                    <FieldWrap>
                        <Header>신청서</Header>
                        <hr/>
                        <Field>
                            <InputWrap>
                                <InputName
                                    label="이름"
                                    value={state.name}
                                    onChange={handleChange('name')}
                                />
                            </InputWrap>
                            <InputWrapR>
                                <InputLabel>지원 분야</InputLabel>
                                <SelField
                                    value={state.field}
                                    onChange={handleChange('field')}>
                                    <MenuItem value="Pwnable">Pwn(시스템해킹)</MenuItem>
                                    <MenuItem value="Reversing">Rev(리버싱)</MenuItem>
                                    <MenuItem value="Web Hacking">Web Hacking(웹해킹)</MenuItem>
                                    <MenuItem value="Forensic">Forensic(포렌식)</MenuItem>
                                    <MenuItem value="App Development">App(앱개발)</MenuItem>
                                    <MenuItem value="Web FrontEnd Development">Web FrontEnd(웹프론트개발)</MenuItem>
                                    <MenuItem value="BackEnd Development">Web BackEnd(웹백엔드개발)</MenuItem>
                                </SelField>
                            </InputWrapR>
                        </Field>
                        <Field>
                            <InputWrap>
                                <InputLabel>반</InputLabel>
                                <SelClassNum
                                    value={state.classNum}
                                    onChange={handleChange('classNum')}>
                                    <MenuItem value="1">게임 1반</MenuItem>
                                    <MenuItem value="2">정보보안 1반</MenuItem>
                                    <MenuItem value="3">정보보안 2반</MenuItem>
                                    <MenuItem value="4">정보보안 3반</MenuItem>
                                    <MenuItem value="5">정보보안 4반</MenuItem>
                                </SelClassNum>
                            </InputWrap>
                            <InputWrapR>
                                <InputLabel>번호</InputLabel>
                                <SelStudentNum
                                    value={state.studentNum}
                                    onChange={handleChange('studentNum')}>
                                    <MenuItem value="1">1번</MenuItem>
                                    <MenuItem value="2">2번</MenuItem>
                                    <MenuItem value="3">3번</MenuItem>
                                    <MenuItem value="4">4번</MenuItem>
                                    <MenuItem value="5">5번</MenuItem>
                                    <MenuItem value="6">6번</MenuItem>
                                    <MenuItem value="7">7번</MenuItem>
                                    <MenuItem value="8">8번</MenuItem>
                                    <MenuItem value="9">9번</MenuItem>
                                    <MenuItem value="10">10번</MenuItem>
                                    <MenuItem value="11">11번</MenuItem>
                                    <MenuItem value="12">12번</MenuItem>
                                    <MenuItem value="13">13번</MenuItem>
                                    <MenuItem value="14">14번</MenuItem>
                                    <MenuItem value="15">15번</MenuItem>
                                    <MenuItem value="16">16번</MenuItem>
                                    <MenuItem value="17">17번</MenuItem>
                                    <MenuItem value="18">18번</MenuItem>
                                    <MenuItem value="19">19번</MenuItem>
                                    <MenuItem value="20">20번</MenuItem>
                                </SelStudentNum>
                            </InputWrapR>
                        </Field>
                        <InputContent
                            label="자기소개"
                            type="text"
                            value={state.content}
                            onChange={handleChange('content')}
                            placeholder="자기소개는 자유양식 입니다."
                            rows="8"
                            fullWidth
                            multiline
                            inputProps={{
                                maxLength: 500
                            }}/>
                        <Count>{state.content.length}/500</Count>
                    </FieldWrap>
                </CardContent>

                <CardActions>
                    <SaveBtn
                        variant="contained"
                        onClick={() => setIsSubmit(false)}
                        type="submit"
                        fullWidth
                        size="large">
                        저쟝하기
                    </SaveBtn>
                    <SubBtn
                        variant="contained"
                        onClick={() => setIsSubmit(true)}
                        type="submit"
                        fullWidth
                        size="large">
                        지원하기
                    </SubBtn>
                </CardActions>
            </CardMain>
        </Form>
    );
}