import React from 'react';
import styled from 'styled-components';

import Autocomplete from '../components/Autocomplete';

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

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 270px;
  align-content: space-between;
`;

const StyledAutocomplete = styled(Autocomplete)`
  width: 30%;
  margin-right: 3.33%;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

function AutocompletePage() {
  return (
    <Wrapper>
      <Title>Inputs</Title>
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}>
        <StyledAutocomplete name="province" placeholder="Province" />
        <StyledAutocomplete name="town" placeholder="Town" />
        <StyledAutocomplete name="zip-code" placeholder="Zip code" />
        <StyledAutocomplete name="address" placeholder="Address" />
        <StyledAutocomplete name="number" placeholder="Number" />
      </Form>
    </Wrapper>
  );
}

export default AutocompletePage;
