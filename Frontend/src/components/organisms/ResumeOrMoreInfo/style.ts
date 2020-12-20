import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  bottom: 1rem;
  justify-content: space-between; 
  height: 3rem;
  width: 100%;
  opacity: 0%;
  transition: all 0.6s;
  &.active {
    opacity: 100%;
  }
`;

export const TextBox = styled.div`
  z-index: 10;
  &:first-child {
    padding-left: 13%;
  }
  &:last-child {
    padding-right: 13%;
  }
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 350px) {
    font-size: 1rem;
  }

`;
