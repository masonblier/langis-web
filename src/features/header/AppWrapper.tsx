import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';

import { AppHeader } from './AppHeader';
import { AppMenu } from './AppMenu';

interface Props {
}

const AppWrapperContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
`;

const AppWrapperInner = styled.div`
  flex-grow: 1;
  min-width: 25rem;
`;

const AppContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
`;

export const AppWrapper = ({children}: PropsWithChildren<Props>) => {
  return <AppWrapperContainer>
    <AppMenu/>
    <AppWrapperInner>
      <AppHeader/>
      <AppContent>
        {children}
      </AppContent>
    </AppWrapperInner>
  </AppWrapperContainer>
}
