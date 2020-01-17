import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 200px;
  padding-top: 100px;
`;

const Title = styled.h1`
  font-size: 7.9rem;
  line-height: 103px;
  color: ${props => props.theme.yellow};
  font-weight: 700;
  margin: 0;
  margin-bottom: 70px;
`;

function PageWrapper({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
