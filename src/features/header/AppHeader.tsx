import React from 'react'
import classNames from 'classnames';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'app/rootReducer'
import { toggleMenu } from '../../slices/appStateSlice'

const AppHeaderContainer = styled.div`
  padding: 0.5rem;

  a {
    font-size: 1.2rem;
  }
`;

const AppMenuButton = styled.div`
  display: block;
  float: right;
  width: 0.9rem; height: 0.9rem;
  margin: 0.2rem;
  text-align: center;
  cursor: pointer;
  opacity: 0.5;
  background: linear-gradient(
    to bottom,
    black,
    black 20%,
    transparent 20%,
    transparent 40%,
    black 40%,
    black 60%,
    transparent 60%,
    transparent 80%,
    black 80%
  );
  &:hover {
    opacity: 0.8;
  }
  &.showMenu {
    opacity: 1;
  }
`;

export const AppHeader = () => {
  const dispatch = useDispatch()
  const {showMenu} = useSelector((state: RootState) => state.appState)

  return <AppHeaderContainer>
    <a href="/">Langis</a>
    <AppMenuButton onClick={() => dispatch(toggleMenu())} className={classNames({showMenu})}/>
  </AppHeaderContainer>
}
