import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 12px 21px;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 4px 8px;
  color: ${props => props.theme.yellow};

  &.active,
  &:hover {
    color: ${props => props.theme.black};
  }
`;

function Header() {
  return (
    <Wrapper>
      <StyledLink to="/autocomplete">Autocomplete</StyledLink>
      <StyledLink to="/free-text">Free text</StyledLink>
    </Wrapper>
  );
}

export default Header;
