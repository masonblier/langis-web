import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

import { ModalBase } from './ModalBase'

interface Props {
}

const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const LoginFormBody = styled.div`
  display: flex;
  flex-direction: column;
  clear: both;
  padding-top: 1rem;
`;
const LoginFormInput = styled.input`
  display: block;
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 3px;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  margin: 0.5rem 0;
`;

const LoginFormActions = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginFormButton = styled.button`
  display: block;
  border: 1px solid ${p => p.theme.activeBorderColor};
  border-radius: 3px;
  background: ${p => p.theme.activeBackgroundColor};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
`;

const LoginFormSubActions = styled.div`
  margin: 0.5rem 0;
  font-size: 0.8em;
  color: ${p => p.theme.textLight};
  text-align: center;
`;
const LoginFormLink = styled.a`

`;

export const LoginModal = () => {
  return <ModalBase>
    <LoginFormContainer>
      <LoginFormBody>
        <LoginFormInput type='text' placeholder='username'/>
        <LoginFormInput type='password' placeholder='password'/>
      </LoginFormBody>
      <LoginFormActions>
        <LoginFormButton>Log In</LoginFormButton>
      </LoginFormActions>
      <LoginFormSubActions>
        <span>No account? <LoginFormLink>Register now</LoginFormLink></span>
      </LoginFormSubActions>
    </LoginFormContainer>
  </ModalBase>
}
