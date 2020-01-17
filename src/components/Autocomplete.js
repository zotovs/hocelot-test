import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  border: ${props => props.theme.border};
  border-radius: 2px;
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 2.2rem;
  line-height: 29px;
`;

const Autocomplete = ({ placeholder, className }) => {
  return (
    <div className={className}>
      <InputWrapper>
        <Input type="text" placeholder={placeholder} />
      </InputWrapper>
    </div>
  );
};

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Autocomplete;
