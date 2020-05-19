import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'app/rootReducer'
import { CloseIcon } from '../../components/icons/CloseIcon'
import { KeyIcon } from '../../components/icons/KeyIcon'
import { showModal, toggleMenu } from '../../slices/appStateSlice'

const AppMenuContainer = styled.div`
  background: #0c455a;
  width: 15rem;
  overflow: hidden;
  transition: all 0.7s;
  flex-shrink: 0;
`;

const MenuHeader = styled.div`
  padding: 0.5rem;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: row;
  opacity: 0.7;
  span {
    flex-grow: 1;
  }
`;
const CloseButton = styled.div`
  position: relative;
  top: -3px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const SectionHeader = styled.div`
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #ffffff10;
  background: #ffffff20;
  font-weight: bold;
  color: white;
`;
const SectionBody = styled.div`
  min-width: 12rem;
`;
const SectionItem = styled.div`
  padding: 0.7rem 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    background: #ffffff10;
  }
`;

export const AppMenu = () => {
  const dispatch = useDispatch()
  const {showingMenu} = useSelector((state: RootState) => state.appState)

  return <AppMenuContainer style={{width: (showingMenu ? '' : 0)}}>
    <MenuHeader>
      <span>Menu</span>
      <CloseButton onClick={() => dispatch(toggleMenu())}>
        <CloseIcon color='white'/>
      </CloseButton>
    </MenuHeader>
    <SectionHeader>
      Account
    </SectionHeader>
    <SectionBody onClick={() => dispatch(toggleMenu())}>
      <SectionItem onClick={() => dispatch(showModal('login'))}>
        <KeyIcon color='white'/>
        Login
      </SectionItem>
    </SectionBody>
  </AppMenuContainer>
}
