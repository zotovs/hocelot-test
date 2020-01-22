import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import { ArrowBorderWrapper } from '../styles/common';

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 10px 40px 10px 20px;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 2.2rem;
  line-height: 29px;
`;

const Menu = styled.ul`
  position: absolute;
  z-index: 2;
  top: 100%;
  width: 100%;
  max-height: 200px;
  margin: 0;
  padding: 20px 0;
  list-style-type: none;
  border: ${props => props.theme.border};
  border-radius: 2px;
  font-size: 2.2rem;
  background-color: ${props => props.theme.white};
`;

const MenuItem = styled.li`
  padding: 0 20px;
  font-weight: ${props => (props.active ? '500' : '400')};
  background-color: ${props =>
    props.highlighted ? 'rgba(0,0,0,0.05)' : 'transparent'};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Autocomplete = ({
  placeholder,
  name,
  propertyName,
  items,
  className,
  onInputChange,
  onChange,
}) => {
  return (
    <Downshift
      onChange={onChange}
      itemToString={item => (item ? item[propertyName] : '')}
      onInputValueChange={onInputChange}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <Wrapper className={className}>
          <ArrowBorderWrapper {...getRootProps({}, { suppressRefError: true })}>
            <Input {...getInputProps({ name, placeholder })} />
          </ArrowBorderWrapper>
          {isOpen && items.length > 0 && (
            <Menu {...getMenuProps()}>
              {items.map((item, index) => (
                <MenuItem
                  {...getItemProps({
                    key: item.provinceId,
                    index,
                    item,
                    highlighted: highlightedIndex === index,
                    active: selectedItem === item,
                  })}>
                  {item[propertyName]}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Wrapper>
      )}
    </Downshift>
  );
};

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  propertyName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Autocomplete;
