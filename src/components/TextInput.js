import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;

const Label = styled.label`
  display: block;
  color: ${props => props.theme.grey};
  font-size: 2.2rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: calc(100% + 8px);
    height: 25%;
    bottom: -4px;
    left: -4px;
    z-index: 1;
    border: 4px solid ${props => props.theme.grey};
    border-top: none;
  }
`;

const Input = styled.input`
  position: relative;
  z-index: 2;
  padding: 10px 20px;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 2.2rem;
  line-height: 29px;
`;

function TextInput({ label, type, name, className }) {
  return (
    <Wrapper className={className}>
      <Label>
        {label}
        <Input type={type} name={name} />
      </Label>
    </Wrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
