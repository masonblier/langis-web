import React from 'react'
import classNames from 'classnames';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'app/rootReducer'
import { MenuIcon } from '../../components/icons/MenuIcon'
import { toggleMenu } from '../../slices/appStateSlice'

const AppHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  a {
    font-size: 1.2rem;
  }
`;

const AppMenuButton = styled.div`
  flex-grow: 0;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const AppHeader = () => {
  const dispatch = useDispatch()
  const {showingMenu} = useSelector((state: RootState) => state.appState)

  return <AppHeaderContainer>
    <div style={{flexGrow: 1, padding: '0.5rem'}}>
      <a href="/">Langis</a>
    </div>
    <AppMenuButton onClick={() => dispatch(toggleMenu())} className={classNames({showingMenu})}>
      <MenuIcon/>
    </AppMenuButton>
  </AppHeaderContainer>
}
