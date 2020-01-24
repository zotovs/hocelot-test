import React, { useState } from 'react';
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

function AutocompletePage() {
  const [dropdownOptions, setDropdownOptions] = useState({
    isLoaded: false,
    items: [],
  });
  const [values, setValues] = useState({
    province: null,
    zipCode: null,
    town: null,
    addressName: null,
    addressNumber: null,
  });

  const handleInputChange = throttle(
    async (type, params, minLength = 3) => {
      if (params.search.length >= minLength) {
        try {
          const res = await axios.get(`/${type}`, {
            params: { limit: 10, ...params },
          });

          setDropdownOptions({ isLoaded: true, items: res.data.results });
        } catch (error) {}
      }
    },
    500,
    { leading: false },
  );

  const handleChange = value => {
    setDropdownOptions({ isLoaded: false, items: [] });
    setValues({ ...values, ...value });
  };

  return (
    <PageWrapper title="Autocomplete">
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}>
        <StyledAutocomplete
          placeholder="Province"
          propertyName={['provinceName', 'alternativeProvinceName']}
          dropdownOptions={dropdownOptions}
          value={values.province}
          onInputChange={value =>
            handleInputChange(PROVINCE, { search: value })
          }
          onChange={province =>
            handleChange({
              province,
              zipCode: null,
              town: null,
              addressName: null,
              addressNumber: null,
            })
          }
        />
        <StyledAutocomplete
          placeholder="Town"
          propertyName={['townName', 'cityName']}
          dropdownOptions={dropdownOptions}
          disabled={!values.province}
          value={values.town}
          onInputChange={value =>
            handleInputChange(TOWN, {
              provinceId: values.province?.provinceId,
              search: value,
            })
          }
          onChange={town =>
            handleChange({
              town,
              zipCode: null,
              addressName: null,
              addressNumber: null,
            })
          }
        />
        <StyledAutocomplete
          placeholder="Zip code"
          propertyName="zipCode"
          type="number"
          dropdownOptions={dropdownOptions}
          disabled={!values.town}
          value={values.zipCode}
          onInputChange={value =>
            handleInputChange(ZIP_CODE, {
              provinceId: values.province?.provinceId,
              townId: values.town?.townId,
              search: value,
            })
          }
          onChange={zipCode =>
            handleChange({
              zipCode,
              addressName: null,
              addressNumber: null,
            })
          }
        />
        <StyledAutocomplete
          placeholder="Address"
          propertyName="addressName"
          dropdownOptions={dropdownOptions}
          disabled={!values.town}
          value={values.addressName}
          onInputChange={value =>
            handleInputChange(ADDRESS, {
              provinceId: values.province?.provinceId,
              townId: values.town?.townId,
              search: value,
            })
          }
          onChange={addressName =>
            handleChange({ addressName, addressNumber: null })
          }
        />
        <StyledAutocomplete
          placeholder="Number"
          type="number"
          propertyName={['addressNumber', 'addressKmNumber']}
          dropdownOptions={dropdownOptions}
          disabled={!values.addressName}
          value={values.addressNumber}
          onInputChange={value =>
            handleInputChange(
              ADDRESS,
              {
                provinceId: values.province?.provinceId,
                townId: values.town?.townId,
                addressName: values.addressName?.addressName,
                search: value,
              },
              1,
            )
          }
          onChange={addressNumber => handleChange({ addressNumber })}
        />
      </Form>
    </PageWrapper>
  );
}

export default AutocompletePage;
