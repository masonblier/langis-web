import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../../app/rootReducer'
import { showModal } from '../../slices/appStateSlice'
import { LoginModal } from './LoginModal'

const ModalPortalContainer = styled.div`
  position: absolute;
  top: 0; right: 0; left: 0;
  background: #00000020;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.7s;
`;

export const ModalPortal = () => {
  const dispatch = useDispatch()
  const {showingModal} = useSelector((state: RootState) => state.appState)

  return <ModalPortalContainer
    style={{bottom: showingModal ? 0 : '', opacity: showingModal ? 1 : 0}}
    onClick={() => dispatch(showModal(null))}
  >
    {showingModal === 'login' ?
      <LoginModal/>
    : null}
  </ModalPortalContainer>
}
