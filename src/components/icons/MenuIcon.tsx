import styled from 'styled-components';

export const MenuIcon = styled.div`
  color: #000;
  position: relative;
  margin-left: 2px;
  margin-top: 10px;
  width: 17px;
  height: 1px;
  background-color: currentColor;
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 17px;
    height: 1px;
    background-color: currentColor;
  }
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 17px;
    height: 1px;
    background-color: currentColor;
  }
`;
