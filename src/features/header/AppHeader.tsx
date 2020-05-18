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

const HeaderLink = styled.a`
  flex-grow: 1;
  padding: 0.5rem;
`;
const AppMenuButton = styled.div`
  flex-grow: 0;
  padding: 0.5rem;
  &:hover {
    opacity: 0.5;
  }
`;

export const AppHeader = () => {
  const dispatch = useDispatch()
  const {showMenu} = useSelector((state: RootState) => state.appState)

  return <AppHeaderContainer>
    <HeaderLink href="/">Langis</HeaderLink>
    <AppMenuButton onClick={() => dispatch(toggleMenu())} className={classNames({showMenu})}>
      <MenuIcon/>
    </AppMenuButton>
  </AppHeaderContainer>
}
