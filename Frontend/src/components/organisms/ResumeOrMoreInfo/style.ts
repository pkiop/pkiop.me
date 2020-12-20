import styled from 'styled-components';

export const Main = styled.div`
  bottom: 1rem;
  display:flex;
  justify-content: space-between; 
  height: 3rem;
  width: 100%;
`;

export const TextBox = styled.div`
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
