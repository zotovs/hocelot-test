import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import PageWrapper from '../components/PageWrapper';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import axiosInstance from '../config/axios';

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

const schema = yup.object().shape({
  provinceId: yup
    .string()
    .required('Province is required')
    .matches(/^\d{2}$/, 'Province must be 2 digits long'),
  townName: yup.string().required('Town is required'),
  zipCode: yup
    .string()
    .required('Zip-code is required')
    .matches(/^\d{5}$/, 'Zip-code must be 5 digits long'),
  addressName: yup.string().required('Address name is required'),
  addressNumber: yup.string().required('Address number is required'),
});

function FreeTextPage({ onSetResults }) {
  const [values, setValues] = useState({
    provinceId: '',
    townName: '',
    zipCode: '',
    addressName: '',
    addressNumber: '',
  });

  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      schema.validateSync(values, { abortEarly: false });

      const response = await axiosInstance.get(`/address/check`, {
        params: values,
      });

      onSetResults(response.data.results[0]);
      history.push('/results');
    } catch (error) {
      if (error.name === 'ValidationError') {
        alert(error.errors.join('\n'));
      }
    }
  };

  return (
    <PageWrapper title="Inputs">
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <StyledTextInput
            value={values.provinceId}
            onChange={handleChange}
            name="provinceId"
            type="number"
            label="Province"
          />
          <StyledTextInput
            value={values.townName}
            onChange={handleChange}
            name="townName"
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
            value={values.addressName}
            onChange={handleChange}
            name="addressName"
            label="Address"
          />
          <StyledTextInput
            value={values.addressNumber}
            onChange={handleChange}
            type="number"
            name="addressNumber"
            label="Number"
          />
        </InputsWrapper>
        <Button type="submit">Accepted</Button>
      </form>
    </PageWrapper>
  );
}

FreeTextPage.propTypes = {
  onSetResults: PropTypes.func.isRequired,
};

export default FreeTextPage;
