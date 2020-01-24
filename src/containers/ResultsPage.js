import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageWrapper from '../components/PageWrapper';
import InfoItem from '../components/InfoItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
`;

const StyledInfoItem = styled(InfoItem)`
  width: 30%;
`;

function ResultsPage({ results }) {
  if (!results.loaded) {
    return <Redirect to="/free-text" />;
  }

  if (!results.item) {
    return (
      <PageWrapper title="Address Info">
        <Wrapper>Nothing was found</Wrapper>
      </PageWrapper>
    );
  }

  const addressInfo = [
    { name: 'Address Type', value: results.item.addressType },
    {
      name: 'Address Type Abbreviature',
      value: results.item.addressTypeAbbreviature,
    },
    { name: 'Address Name', value: results.item.addressName },
    { name: 'Address Number', value: results.item.addressNumber },
  ];

  const geolocation = [
    { name: 'Town Name', value: results.item.townName },
    { name: 'Alternative Town Name', value: results.item.alternativeTownName },
    { name: 'City', value: results.item.cityName },
    { name: 'Alternative City', value: results.item.alternativeCityName },
    { name: 'Province', value: results.item.provinceName },
    {
      name: 'Alternative Province Name',
      value: results.item.alternativeProvinceName,
    },
    {
      name: 'Autonomous region name',
      value: results.item.autonomousRegionName,
    },
    {
      name: 'Alternative autonomous region name',
      value: results.item.alternativeAutonomousRegionName,
    },
    { name: 'Latitude', value: results.item.latitude },
    { name: 'Longtitude', value: results.item.longitude },
  ];

  const addressEnrichment = [
    {
      name: 'alternative address type name cal',
      value: results.item.alternativeAddressTypeNameGAL,
    },
    {
      name: 'alternative address type name eus',
      value: results.item.alternativeAddressTypeNameEUS,
    },
    {
      name: 'alternative address type name cat',
      value: results.item.alternativeAddressTypeNameCAT,
    },
    { name: 'type', value: results.item.type },
    { name: 'usage', value: results.item.usage },
    { name: 'sqm', value: results.item.sqm },
    {
      name: 'land registry reference',
      value: results.item.landRegistryReference,
    },
    { name: 'land registry plot', value: results.item.landRegistryPlot },
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
  results: PropTypes.shape({
    loaded: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    item: PropTypes.object,
  }).isRequired,
};

export default ResultsPage;
