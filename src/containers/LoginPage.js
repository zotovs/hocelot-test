import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: ${props => props.theme.border};
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 2.2rem;
`;

function LoginPage({ onLogin }) {
  return (
    <Wrapper>
      <Button onClick={onLogin}>Log in</Button>
    </Wrapper>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
