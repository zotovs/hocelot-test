import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';
import InfoItem from '../components/InfoItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInfoItem = styled(InfoItem)`
  width: 30%;
`;

const addressInfo = [
  { name: 'Address Type', value: 'Carretera' },
  { name: 'Address Type Abbreviature', value: 'CRTA.' },
  { name: 'Address Name', value: 'CRTA. de la coruna' },
  { name: 'Alternative Address Name', value: 'Carretera de la coruna' },
  { name: 'Address Number', value: 18 },
];

const geolocation = [
  { name: 'Town Name', value: 'Las rozas' },
  { name: 'Alternative Town Name', value: 'Rozas' },
  { name: 'City', value: 'Madrid' },
  { name: 'Alternative City', value: 'Madrid' },
  { name: 'Province', value: 'Madrid' },
  { name: 'Alternative Province Name', value: 'Madrid' },
  { name: 'Autonomous region name', value: 'Comunidad de madrid' },
  { name: 'Alternative autonomous region name', value: 'comunidad de madrid' },
  { name: 'Latitude', value: '40.323424' },
  { name: 'Longtitude', value: '-3.8219381' },
];

const addressEnrichment = [
  { name: 'alternative address type name cal', value: 'estrada da coruna' },
  { name: 'alternative address type name eus', value: 'la coruna errepidea' },
  {
    name: 'alternative address type name cat',
    value: 'carretera de la corunya',
  },
  { name: 'type', value: 'building' },
  { name: 'usage', value: 'office' },
  { name: 'sqm', value: '---' },
  { name: 'land registry reference', value: '123452341unx' },
  { name: 'land registry plot', value: '1231231231unx' },
];

function ResultsPage() {
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

export default ResultsPage;
