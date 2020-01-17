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

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  const disabled =
    !values.province ||
    !values.town ||
    !values.zipCode ||
    !values.address ||
    !values.number;

  return (
    <PageWrapper title="Inputs">
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <StyledTextInput
            value={values.province}
            onChange={handleChange}
            name="province"
            label="Province"
          />
          <StyledTextInput
            value={values.town}
            onChange={handleChange}
            name="town"
            label="Town"
          />
          <StyledTextInput
            value={values.zipCode}
            onChange={handleChange}
            type="number"
            name="zipCode"
            label="Zip code"
          />
          <StyledTextInput
            value={values.address}
            onChange={handleChange}
            name="address"
            label="Address"
          />
          <StyledTextInput
            value={values.number}
            onChange={handleChange}
            type="number"
            name="number"
            label="Number"
          />
        </InputsWrapper>
        <Button disabled={disabled} type="submit">
          Accepted
        </Button>
      </form>
    </PageWrapper>
  );
}

export default FreeTextPage;
