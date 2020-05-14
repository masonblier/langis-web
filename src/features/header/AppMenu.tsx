import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'

import { RootState } from 'app/rootReducer'

const AppMenuContainer = styled.div`
  background: #0c455a;
  width: 15rem;
  overflow: hidden;
  transition: all 0.7s;
  flex-shrink: 0;
`;

const AppMenuInner = styled.div`
  padding: 0.5rem;
`;

export const AppMenu = () => {
  const {showMenu} = useSelector((state: RootState) => state.appState)

  return <AppMenuContainer style={{width: (showMenu ? '' : 0)}}>
    <AppMenuInner>
      <a href="/">Login</a>
    </AppMenuInner>
  </AppMenuContainer>
}
