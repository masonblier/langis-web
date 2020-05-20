import React, { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { CloseIcon } from '../../components/icons/CloseIcon'
import { showModal } from '../../slices/appStateSlice'

interface Props {
}

const ModalBaseContainer = styled.div`
  border-radius: 1rem;
  background: white;
  padding: 1rem;
  width: 550px;
  min-height: 250px;
  max-width: 100%;
  max-height: 100%;
`;

const CloseButton = styled.div`
  float: right;
  position: relative;
  top: -3px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ModalBase = ({children}: PropsWithChildren<Props>) => {
  const dispatch = useDispatch()

  return <ModalBaseContainer onClick={e => e.stopPropagation()}>
    <CloseButton onClick={() => dispatch(showModal(null))}>
      <CloseIcon color='black'/>
    </CloseButton>
    {children}
  </ModalBaseContainer>
}
