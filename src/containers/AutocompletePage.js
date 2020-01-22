import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

import PageWrapper from '../components/PageWrapper';
import Autocomplete from '../components/Autocomplete';
import axios from '../config/axios';

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

const PROVINCE = 'province';
const ZIP_CODE = 'zip-code';
const TOWN = 'town';
const ADDRESS = 'address';

const initialState = {
  provinceItems: [],
  zipCodeItems: [],
  townItems: [],
  addressItems: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PROVINCE: {
      return {
        ...state,
        provinceItems: payload,
      };
    }
    case ZIP_CODE: {
      return {
        ...state,
        zipCodeItems: payload,
      };
    }
    case TOWN: {
      return {
        ...state,
        townItems: payload,
      };
    }
    case ADDRESS: {
      return {
        ...state,
        addressItems: payload,
      };
    }
    default: {
      throw new Error();
    }
  }
};

function AutocompletePage() {
  const [
    { provinceItems, zipCodeItems, townItems, addressItems },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [values, setValues] = useState({
    province: null,
    zipCode: null,
    town: null,
    addressName: null,
    addressNumber: null,
  });

  const handleInputChange = throttle(async (type, params) => {
    if (params.search.length > 3) {
      const res = await axios.get(`/${type}`, {
        params: { limit: 10, ...params },
      });

      dispatch({ type, payload: res.data.results });
    }
  }, 500);

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
          items={provinceItems}
          onInputChange={value =>
            handleInputChange(PROVINCE, { search: value })
          }
          onChange={province => setValues({ ...values, province })}
        />
        {/* <StyledAutocomplete
          name={TOWN}
          placeholder="Town"
          propertyName="townName"
          onInputChange={handleInputChange}
          items={townItems}
        />
        <StyledAutocomplete
          name={ZIP_CODE}
          placeholder="Zip code"
          propertyNam="zipCode"
        />
        <StyledAutocomplete
          name={ADDRESS}
          placeholder="Address"
          propertyName="addressType"
        />
        <StyledAutocomplete name="number" placeholder="Number" /> */}
      </Form>
    </PageWrapper>
  );
}

export default AutocompletePage;
