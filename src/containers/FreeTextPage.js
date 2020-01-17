import React, { useState } from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const InputsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: space-between;
  min-height: 270px;
  margin-bottom: 100px;
`;

const StyledTextInput = styled(TextInput)`
  width: 30%;
  margin-right: 3.33%;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

function FreeTextPage() {
  const [values, setValues] = useState({
    province: '',
    town: '',
    zipCode: '',
    address: '',
    number: '',
  });

  return (
    <PageWrapper title="Inputs">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}>
        <InputsWrapper>
          <StyledTextInput name="province" label="Province" />
          <StyledTextInput name="town" label="Town" />
          <StyledTextInput type="number" name="zip-code" label="Zip code" />
          <StyledTextInput name="address" label="Address" />
          <StyledTextInput type="number" name="number" label="Number" />
        </InputsWrapper>
        <Button type="submit">Accepted</Button>
      </form>
    </PageWrapper>
  );
}

export default FreeTextPage;
