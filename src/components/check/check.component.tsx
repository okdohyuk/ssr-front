import React, {useState} from 'react';
import axios from 'axios';

import main from 'lib/image/main.png';
import Button from '@material-ui/core/Button';
import {withStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {yellow} from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';

const Form = styled.form `
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 15px;
`;

const CardHeader = styled.div `
    padding: 12px;
`;

const Img = styled.img `
    height: 200px;
`;

const CardMain = styled(Card)`
    max-width: 500px;
    margin: auto;
    border-radius: 0 !important;
`;

const InputWrap = styled.div ``;

const InputPhone = styled(TextField)``;

const InputPw = styled(TextField)``;

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

export default function CheckComponent() {
    document.title = "SSR 조회하기";
    const [state, setState] = useState < {
        phone: string;
        password: string;
    } > ({phone: '', password: ''});

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
        if (state.phone.trim() && state.password.trim()) {
            post();
        } else {
            alert("빈칸을 모두 채워주세요.");
        }
    }

    const post = () => {
        axios
            .post('/load', {
                phone: state.phone,
                password: state.password
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <CardHeader>
                <Img src={main} alt={main}/>
            </CardHeader>
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
                    <SubBtn variant="contained" type="submit" fullWidth size="large">
                        조회하기
                    </SubBtn>
                </CardActions>
            </CardMain>
        </Form>
    );
}