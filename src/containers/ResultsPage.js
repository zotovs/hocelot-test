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

function ResultsPage() {
  return (
    <PageWrapper title="Address Info">
      <Wrapper>
        <StyledInfoItem title="Address info:" />
        <StyledInfoItem title="Geolocation:" />
        <StyledInfoItem title="Address enrichment:" />
      </Wrapper>
    </PageWrapper>
  );
}

export default ResultsPage;
