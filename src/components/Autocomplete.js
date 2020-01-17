import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
`;

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

const items = [
  {
    provinceId: '1',
    provinceName: 'ÁLAVA',
    alternativeProvinceName: 'ARABA',
    autonomousRegionId: '16',
    autonomousRegionName: 'PAÍS VASCO',
    alternativeAutonomousRegionName: 'EUSKADI',
  },
  {
    provinceId: '28',
    provinceName: 'MADRID',
    alternativeProvinceName: null,
    autonomousRegionId: '13',
    autonomousRegionName: 'COMUNIDAD DE MADRID',
    alternativeAutonomousRegionName: null,
  },
];

const Autocomplete = ({ placeholder, name, className }) => {
  return (
    <Downshift
      onChange={selection => console.log(selection)}
      itemToString={item => (item ? item.provinceName : '')}>
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
          <InputWrapper {...getRootProps({}, { suppressRefError: true })}>
            <Input {...getInputProps({ name, placeholder })} />
          </InputWrapper>
          {isOpen && (
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
                  {item.provinceName}
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
};

export default Autocomplete;
