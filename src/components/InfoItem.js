import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ArrowBorderWrapper } from '../styles/common';

const Wrapper = styled.div`
  position: relative;
`;

const StyledArrowBorderWrapper = styled(ArrowBorderWrapper)`
  padding: 10px 20px;
  font-size: 2.2rem;
  color: ${props => props.theme.grey};
  cursor: pointer;
`;

const List = styled.ul`
  position: absolute;
  z-index: 2;
  top: 100%;
  width: 100%;
  margin: 0;
  padding: 20px 10px;
  list-style-type: none;
  border: ${props => props.theme.border};
  border-radius: 2px;
  font-size: 1.8rem;
  line-height: 1.5;
  background-color: ${props => props.theme.white};
`;

const Item = styled.div`
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const ItemLabel = styled.div`
  color: ${props => props.theme.grey};
`;

function InfoItem({ title, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className={className}>
      <StyledArrowBorderWrapper onClick={() => setIsOpen(true)}>
        {title}
      </StyledArrowBorderWrapper>
      {isOpen && (
        <List>
          <Item>
            <ItemLabel>Address type</ItemLabel>
            <div>Carretera</div>
          </Item>
          <Item>
            <ItemLabel>Address type abbreviature</ItemLabel>
            <div>crta.</div>
          </Item>
          <Item>
            <ItemLabel>Address name</ItemLabel>
            <div>Crta. de la coruna</div>
          </Item>
        </List>
      )}
    </Wrapper>
  );
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InfoItem;
