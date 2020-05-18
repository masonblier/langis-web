import styled from 'styled-components';

export const CloseIcon = styled.div`
  color: ${p => p.color || '#000'};
  position: relative;
  margin-top: 0;
  margin-left: 0;
  width: 14px;
  height: 14px;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    width: 14px;
    height: 1px;
    background-color: currentColor;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    width: 14px;
    height: 1px;
    background-color: currentColor;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
`;
