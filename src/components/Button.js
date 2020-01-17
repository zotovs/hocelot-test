import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  border: none;
  box-shadow: none;
  background-color: ${props => props.theme.grey};
  padding: 15px 25px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${props => props.theme.white};
  cursor: pointer;
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
