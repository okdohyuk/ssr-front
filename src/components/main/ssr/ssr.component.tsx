import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import background from 'lib/image/background_1.png';
import main from 'lib/image/main.png';
import styled from 'styled-components';

const BG = styled.div`
  background-color: #ffffff;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Img = styled.img`
  height: 260px;

  @media screen and (max-device-width: 630px) {
    height: 200px;
    margin-bottom: 50px;
  }
`;

const LinkWrap = styled.div``;

const Move = styled(Link)`
  text-decoration: none !important;
`;

const Btn = withStyles((theme: Theme) => ({
  root: {
    borderRadius: 0,
    margin: 20,
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    fontSize: '20px',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
}))(Button);

export default () => (
  <BG className="section">
    <Img src={main} alt={main} />
    <LinkWrap>
      <Move to="/apply">
        <Btn variant="contained" disableElevation>
          지원서 작성하기
        </Btn>
      </Move>
      <Move to="/check">
        <Btn variant="contained" disableElevation>
          지원서 수정하기
        </Btn>
      </Move>
    </LinkWrap>
  </BG>
);
