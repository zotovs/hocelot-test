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
  const [items, setItems] = useState([]);
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

      setItems(res.data.results);
    }
  }, 500);

  const handleChange = value => {
    setItems([]);
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
          items={items}
          onInputChange={value =>
            handleInputChange(PROVINCE, { search: value })
          }
          onChange={province => handleChange({ province })}
        />
        <StyledAutocomplete
          placeholder="Town"
          propertyName={[
            'townName',
            'alternativeTownName',
            'cityName',
            'alternativeCityName',
          ]}
          items={items}
          disabled={!values.province}
          onInputChange={value =>
            handleInputChange(TOWN, {
              provinceId: values.province?.provinceId,
              search: value,
            })
          }
          onChange={town => handleChange({ town })}
        />
        <StyledAutocomplete
          placeholder="Zip code"
          propertyName="zipCode"
          type="number"
          items={items}
          disabled={!values.town}
          onInputChange={value =>
            handleInputChange(ZIP_CODE, {
              provinceId: values.province?.provinceId,
              townId: values.town?.townId,
              search: value,
            })
          }
          onChange={zipCode => handleChange({ zipCode })}
        />
        <StyledAutocomplete
          placeholder="Address"
          propertyName={['addressName', 'alternativeAddressName']}
          items={items}
          disabled={!values.town}
          onInputChange={value =>
            handleInputChange(ADDRESS, {
              provinceId: values.province?.provinceId,
              townId: values.town?.townId,
              search: value,
            })
          }
          onChange={addressName => handleChange({ addressName })}
        />
        <StyledAutocomplete
          placeholder="Number"
          type="number"
          propertyName={['addressNumber', 'addressKmNumber']}
          items={items}
          disabled={!values.addressName}
          onInputChange={value =>
            handleInputChange(ADDRESS, {
              provinceId: values.province?.provinceId,
              townId: values.town?.townId,
              addressName: values.addressName?.addressName,
              search: value,
            })
          }
          onChange={addressNumber => handleChange({ addressNumber })}
        />
      </Form>
    </PageWrapper>
  );
}

export default AutocompletePage;
