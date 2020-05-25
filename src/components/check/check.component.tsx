import React, { useState } from 'react';
import axios from 'axios';

import { withStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { yellow } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const CardMain = styled(Card)`
  max-width: 500px;
  margin: auto;

  border-radius: 0 !important;
`;

const InputWrap = styled.div``;

const InputPhone = styled(TextField)``;

const InputPw = styled(TextField)``;

const SubBtn = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    borderRadius: 0,
    fontSize: '20px',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
}))(Button);

export interface FormData {
  phone: string;
  password: string;
}

export default function CheckComponent() {
  document.title = 'SSR 조회하기';
  let history = useHistory();
  const [state, setState] = useState<FormData>({ phone: '', password: '' });
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

  const [btnabled, setBtnabled] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setBtnabled(true);
    if (state.phone.trim() && state.password.trim()) {
      load();
    } else {
      alert('빈칸을 모두 채워주세요.');
      setBtnabled(false);
    }
  };

  const load = () => {
    axios
      .post('/api/application/load', {
        phone: state.phone,
        password: state.password,
      })
      .then(function (response) {
        const Data = response.data.data.application;
        return history.push(
          `/revise/${Data.pk}/${Data.phone}/${Data.classNum}/${Data.studentNum}/${Data.name}/${Data.field}/${Data.content}`,
        );
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
          setBtnabled(false);
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardMain>
        <CardContent>
          <InputWrap>
            <InputPhone
              label="전화번호"
              value={state.phone}
              onChange={handleChange('phone')}
              margin="normal"
              fullWidth
            />
            <InputPw
              label="비밀번호"
              type="password"
              value={state.password}
              onChange={handleChange('password')}
              margin="normal"
              fullWidth
            />
          </InputWrap>
        </CardContent>
        <CardActions>
          <SubBtn
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            disabled={btnabled}
          >
            조회하기
          </SubBtn>
        </CardActions>
      </CardMain>
    </Form>
  );
}
