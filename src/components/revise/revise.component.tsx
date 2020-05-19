import React, { useState } from 'react';
import axios from 'axios';
import { withRouter, RouteComponentProps } from 'react-router-dom';
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
import main from 'lib/image/main.png';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  padding: 15px;
`;

const CardHeader = styled.div`
  padding: 12px;
  text-align: center;
`;

const Img = styled.img`
  height: 200px;
`;

const Header = styled.h4``;

const CardMain = styled(Card)`
  max-width: 1000px;
  margin: auto;
  border-radius: 0 !important;
`;

const AccountWrap = styled.div`
  margin-bottom: 20px;
`;

const FieldWrap = styled.div``;

const Field = styled.div`
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

const SaveBtn = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    borderRadius: 0,
    flex: 1,
    fontSize: '20px',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
}))(Button);

const SubBtn = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    borderRadius: 0,
    flex: 1,
    fontSize: '20px',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
}))(Button);

const InputPhone = styled(TextField)``;

const InputPw = styled(TextField)``;

const InputName = styled(TextField)``;

const SelField = styled(Select)``;

const SelClassNum = styled(Select)``;

const SelStudentNum = styled(Select)``;

const InputContent = styled(TextField)``;

interface MatchParams {
  pk: string;
  phone: string;
  classNum: string;
  studentNum: string;
  name: string;
  field:
    | ''
    | 'Forensic'
    | 'Pwnable'
    | 'Web Hacking'
    | 'Web FrontEnd Development'
    | 'BackEnd Development'
    | 'App Development'
    | 'Reversing';
  content: string;
  password?: string;
}

interface FormData {
  pk: number;
  phone: string;
  classNum: number;
  studentNum: number;
  name: string;
  field:
    | ''
    | 'Forensic'
    | 'Pwnable'
    | 'Web Hacking'
    | 'Web FrontEnd Development'
    | 'BackEnd Development'
    | 'App Development'
    | 'Reversing';
  content: string;
  password?: string;
}

const ReviseComponent: React.SFC<RouteComponentProps<MatchParams>> = ({
  match,
}) => {
  document.title = 'SSR 지원서 수정하기';
  const [state, setState] = useState<FormData>({
    pk: Number(match.params.pk),
    phone: match.params.phone,
    classNum: Number(match.params.classNum),
    studentNum: Number(match.params.studentNum),
    name: match.params.name,
    field: match.params.field,
    content: match.params.content,
    password: '',
  });

  const handleChange = (name: keyof typeof state) => (
    event: React.ChangeEvent<{
      value: unknown;
    }>,
  ) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (sub: boolean) => {
    if (
      state.phone.trim() &&
      state.name.trim() &&
      state.field.trim() &&
      state.content.trim() &&
      state.password !== ''
    ) {
      patch(sub);
    } else {
      alert('빈칸을 모두 채워주세요.');
    }
  };

  const patch = (sub: boolean) => {
    axios
      .patch('/api/application', {
        pk: state.pk,
        phone: state.phone,
        classNum: state.classNum,
        studentNum: state.studentNum,
        name: state.name,
        field: state.field,
        content: state.content,
        password: state.password,
        isSubmit: sub,
      })
      .then(function (response) {
        console.log(response);
        if (sub) {
          alert('지원서 등록이 완료되었습니다!');
        } else {
          alert('지원서 저장이 완료되었습니다!');
        }
        //  window.location.href = '/';
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert(error.response.data.message);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <Form>
      <CardHeader>
        <Img src={main} alt={main} />
      </CardHeader>
      <CardMain>
        <CardContent>
          <AccountWrap>
            <Header>계정</Header>
            <hr />
            <InputWrap>
              <InputPhone
                label="전화번호"
                placeholder="01012345678"
                value={state.phone}
                onChange={handleChange('phone')}
              />
            </InputWrap>
            <InputWrapR>
              <InputPw
                label="비밀번호"
                placeholder="8자 이상 대소특수문자 하나이상"
                type="password"
                value={state.password}
                onChange={handleChange('password')}
              />
            </InputWrapR>
          </AccountWrap>
          <FieldWrap>
            <Header>신청서</Header>
            <hr />
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
                <SelField value={state.field} onChange={handleChange('field')}>
                  <MenuItem value="Pwnable">Pwn(시스템해킹)</MenuItem>
                  <MenuItem value="Reversing">Rev(리버싱)</MenuItem>
                  <MenuItem value="Web Hacking">Web Hacking(웹해킹)</MenuItem>
                  <MenuItem value="Forensic">Forensic(포렌식)</MenuItem>
                  <MenuItem value="App Development">App(앱개발)</MenuItem>
                  <MenuItem value="Web FrontEnd Development">
                    Web FrontEnd(웹프론트개발)
                  </MenuItem>
                  <MenuItem value="BackEnd Development">
                    Web BackEnd(웹백엔드개발)
                  </MenuItem>
                </SelField>
              </InputWrapR>
            </Field>
            <Field>
              <InputWrap>
                <InputLabel>반</InputLabel>
                <SelClassNum
                  value={state.classNum}
                  onChange={handleChange('classNum')}
                >
                  <MenuItem value={1}>게임 1반</MenuItem>
                  <MenuItem value={2}>정보보안 1반</MenuItem>
                  <MenuItem value={3}>정보보안 2반</MenuItem>
                  <MenuItem value={4}>정보보안 3반</MenuItem>
                  <MenuItem value={5}>정보보안 4반</MenuItem>
                </SelClassNum>
              </InputWrap>
              <InputWrapR>
                <InputLabel>번호</InputLabel>
                <SelStudentNum
                  value={state.studentNum}
                  onChange={handleChange('studentNum')}
                >
                  <MenuItem value={1}>1번</MenuItem>
                  <MenuItem value={2}>2번</MenuItem>
                  <MenuItem value={3}>3번</MenuItem>
                  <MenuItem value={4}>4번</MenuItem>
                  <MenuItem value={5}>5번</MenuItem>
                  <MenuItem value={6}>6번</MenuItem>
                  <MenuItem value={7}>7번</MenuItem>
                  <MenuItem value={8}>8번</MenuItem>
                  <MenuItem value={9}>9번</MenuItem>
                  <MenuItem value={10}>10번</MenuItem>
                  <MenuItem value={11}>11번</MenuItem>
                  <MenuItem value={12}>12번</MenuItem>
                  <MenuItem value={13}>13번</MenuItem>
                  <MenuItem value={14}>14번</MenuItem>
                  <MenuItem value={15}>15번</MenuItem>
                  <MenuItem value={16}>16번</MenuItem>
                  <MenuItem value={17}>17번</MenuItem>
                  <MenuItem value={18}>18번</MenuItem>
                  <MenuItem value={19}>19번</MenuItem>
                  <MenuItem value={20}>20번</MenuItem>
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
                maxLength: 500,
              }}
            />
            <Count>{state.content.length}/500</Count>
          </FieldWrap>
        </CardContent>
        <CardActions>
          <SaveBtn
            variant="contained"
            onClick={() => handleSubmit(false)}
            size="large"
          >
            저장하기
          </SaveBtn>
          <SubBtn
            variant="contained"
            onClick={() => handleSubmit(true)}
            size="large"
          >
            지원하기
          </SubBtn>
        </CardActions>
      </CardMain>
    </Form>
  );
};

export default withRouter(ReviseComponent);
