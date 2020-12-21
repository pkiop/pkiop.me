import styled from 'styled-components';

export const Main = styled.div`

  @keyframes changePosition {
    from {
      top: calc(50% - ${({ theme }) => theme.pleaseSlideHeight}rem);
    }

    to {
      top: calc(50% - ${({ theme }) => theme.pleaseSlideHeight}rem + 1rem) ;
    }
  }
  animation-duration: 1s;
  animation-name: changePosition;
  animation-iteration-count: infinite;
  transition: 0.5s;

  height: ${({ theme }) => theme.pleaseSlideHeight}rem;
  color: yellow;
  font-size: 3rem;

  position: fixed;
  top: calc(50% - ${({ theme }) => theme.pleaseSlideHeight}rem);
  left: calc(50% - 18rem);
  z-index: 500;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    left: calc(50% - 12rem);
  }
  &.disable {
    opacity: 0;
  }


`;
export default {};
