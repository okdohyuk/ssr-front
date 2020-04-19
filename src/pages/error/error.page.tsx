import React from 'react';
import styled from 'styled-components';

const Title = styled.h1``;

export default () => {
  document.title = 'SSR-Error';
  return <Title>404 Not Found</Title>;
};
