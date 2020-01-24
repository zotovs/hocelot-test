import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import PropTypes from 'prop-types';

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
  overflow-y: auto;
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
  background-color: ${props =>
    props.highlighted ? 'rgba(0,0,0,0.05)' : 'transparent'};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const itemToString = (item, propertyName) => {
  if (!item) {
    return '';
  }

  if (Array.isArray(propertyName)) {
    return propertyName
      .reduce((acc, name) => {
        if (item[name]) {
          acc.push(item[name]);
        }

        return acc;
      }, [])
      .join(' / ');
  }

  return item[propertyName];
};

const Autocomplete = ({
  placeholder,
  name,
  type,
  propertyName,
  dropdownOptions,
  className,
  disabled,
  value,
  onInputChange,
  onChange,
}) => {
  return (
    <Downshift
      onChange={onChange}
      selectedItem={value}
      itemToString={item => itemToString(item, propertyName)}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        getRootProps,
      }) => (
        <Wrapper className={className}>
          <ArrowBorderWrapper {...getRootProps({}, { suppressRefError: true })}>
            <Input
              {...getInputProps({
                name,
                placeholder,
                disabled,
                type,
                onChange(e) {
                  onInputChange(e.target.value);
                },
              })}
            />
          </ArrowBorderWrapper>
          {isOpen &&
            dropdownOptions.isLoaded &&
            (dropdownOptions.items.length > 0 ? (
              <Menu {...getMenuProps()}>
                {dropdownOptions.items.map((item, index) => (
                  <MenuItem
                    {...getItemProps({
                      key: index,
                      index,
                      item,
                      highlighted: highlightedIndex === index,
                    })}>
                    {itemToString(item, propertyName)}
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              <Menu>
                <MenuItem>Nothing was found</MenuItem>
              </Menu>
            ))}
        </Wrapper>
      )}
    </Downshift>
  );
};

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  propertyName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  dropdownOptions: PropTypes.shape({
    isLoaded: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    items: PropTypes.array.isRequired,
  }).isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  onInputChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

Autocomplete.defaultProps = {
  type: 'text',
};

export default Autocomplete;
