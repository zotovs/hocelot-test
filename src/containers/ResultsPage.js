import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageWrapper from '../components/PageWrapper';
import InfoItem from '../components/InfoItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInfoItem = styled(InfoItem)`
  width: 30%;
`;

function ResultsPage({ results }) {
  if (!results) {
    return <Redirect to="/free-text" />;
  }

  const addressInfo = [
    { name: 'Address Type', value: results.addressType },
    {
      name: 'Address Type Abbreviature',
      value: results.addressTypeAbbreviature,
    },
    { name: 'Address Name', value: results.addressName },
    { name: 'Alternative Address Name', value: results.alternativeAddressName },
    { name: 'Address Number', value: results.addressNumber },
  ];

  const geolocation = [
    { name: 'Town Name', value: results.townName },
    { name: 'Alternative Town Name', value: results.alternativeTownName },
    { name: 'City', value: results.cityName },
    { name: 'Alternative City', value: results.alternativeCityName },
    { name: 'Province', value: results.provinceName },
    {
      name: 'Alternative Province Name',
      value: results.alternativeProvinceName,
    },
    { name: 'Autonomous region name', value: results.autonomousRegionName },
    {
      name: 'Alternative autonomous region name',
      value: results.alternativeAutonomousRegionName,
    },
    { name: 'Latitude', value: results.latitude },
    { name: 'Longtitude', value: results.longitude },
  ];

  const addressEnrichment = [
    {
      name: 'alternative address type name cal',
      value: results.alternativeAddressTypeNameGAL,
    },
    {
      name: 'alternative address type name eus',
      value: results.alternativeAddressTypeNameEUS,
    },
    {
      name: 'alternative address type name cat',
      value: results.alternativeAddressTypeNameCAT,
    },
    { name: 'type', value: results.type },
    { name: 'usage', value: results.usage },
    { name: 'sqm', value: results.sqm },
    { name: 'land registry reference', value: results.landRegistryReference },
    { name: 'land registry plot', value: results.landRegistryPlot },
  ];

  return (
    <PageWrapper title="Address Info">
      <Wrapper>
        <StyledInfoItem options={addressInfo} title="Address info:" />
        <StyledInfoItem options={geolocation} title="Geolocation:" />
        <StyledInfoItem
          options={addressEnrichment}
          title="Address enrichment:"
        />
      </Wrapper>
    </PageWrapper>
  );
}

ResultsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.any,
};

export default ResultsPage;
