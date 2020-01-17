import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 270px;
  align-content: space-between;
`;

function FreeTextPage() {
  return (
    <PageWrapper title="Inputs">
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}>
        Inputs
      </Form>
    </PageWrapper>
  );
}

export default FreeTextPage;
