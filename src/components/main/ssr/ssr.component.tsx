import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core/styles';

import main from 'lib/image/logo.png';
import styled from 'styled-components';

const BG = styled.div``;

const Img = styled.img`
  width: 600px;
  margin-bottom: 60px;

  @media screen and (max-width: 620px) {
    width: 300px;
  }
`;

const LinkWrap = styled.div``;

const Move = styled(Link)`
  text-decoration: none !important;
`;

const Btn = withStyles((theme: Theme) => ({
  root: {
    width: 300,
    borderRadius: 50,
    border: '2px solid #FF6F61',
    margin: 10,
    color: '#FF6F61',
    backgroundColor: 'transparent',
    fontSize: '20px',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
