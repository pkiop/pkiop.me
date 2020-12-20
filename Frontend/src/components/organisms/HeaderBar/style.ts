import styled from 'styled-components';

export const Logo = styled.img`
  width: ${(props) => props.theme.headerbarContentHeight}rem;
  height: ${(props) => props.theme.headerbarContentHeight}rem;
  border: 1px solid black;
  border-radius: ${(props) => props.theme.headerbarContentHeight / 2}rem
`;

export const MenuButtons = styled.div`
  border: 1px solid black;
  @media only screen and (min-width: ${(props) => props.theme.smallWidth}) {
    display: flex;
  }
  @media only screen and (max-width: ${(props) => props.theme.smallWidth}) {
    display: none;
  }
`;

export const Main = styled.div`
  position: relative;
  display:flex;
  justify-content: space-between;
  background-color:${(props) => props.theme.black};
  height:${(props) => props.theme.headerbarHeight};
`;

export const BurgerBtn = styled.img`
  width: ${(props) => props.theme.headerbarContentHeight};
  height: ${(props) => props.theme.headerbarContentHeight};
  @media only screen and (min-width: ${(props) => props.theme.smallWidth}) {
    display: none;
  }
  @media only screen and (max-width: ${(props) => props.theme.smallWidth}) {
    display: flex;
  }
`;
