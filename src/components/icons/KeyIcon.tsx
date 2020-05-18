import React from 'react'
import styled from 'styled-components';

const KeyIconInner = styled.div`
  color: ${p => p.color || '#000'};
  position: relative;
  margin-left: 1px;
  margin-top: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: solid 1px currentColor;

  &:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 7px;
    height: 1px;
    background-color: currentColor;
  }
  &:after {
    content: '';
    position: absolute;
    left: 9px;
    top: 3px;
    width: 1px;
    height: 3px;
    border-left: solid 1px currentColor;
    border-right: solid 1px currentColor;
  }
`;


const KeyIconWrap = styled.span`
  display: inline-block;
  position: relative;
  top: -2px;
  width: 16px;
  margin-right: 5px;
`;

export const KeyIcon = ({color}:{color?:string}) => (
  <KeyIconWrap><KeyIconInner color={color}/></KeyIconWrap>
)
