import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';
import Autocomplete from '../components/Autocomplete';

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
    <PageWrapper title="Autocomplete">
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}>
        <StyledAutocomplete
          name="province"
          placeholder="Province"
          propertyName="provinceName"
        />
        <StyledAutocomplete
          name="town"
          placeholder="Town"
          propertyName="townName"
        />
        <StyledAutocomplete
          name="zip-code"
          placeholder="Zip code"
          propertyNam="zipCode"
        />
        <StyledAutocomplete
          name="address"
          placeholder="Address"
          propertyName="addressType"
        />
        <StyledAutocomplete name="number" placeholder="Number" />
      </Form>
    </PageWrapper>
  );
}

export default AutocompletePage;
