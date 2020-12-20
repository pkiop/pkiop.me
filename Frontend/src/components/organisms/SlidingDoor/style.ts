import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  display:flex;
  height: ${window.innerHeight * 3}px;
  background-color: ${({ theme }) => theme.white};
`;

export const Fix = styled.div`
  overflow: hidden;
  position: sticky; 
  position: -webkit-sticky; 
  top: 0;
  left: 0; 
  z-index: 40; 
  float:left; 
  width:100%;
  height:${window.innerHeight}px;
`;

export const HideImage = styled.img`
  width: 100%;
  transform: scale(1.5);
`;

export const ImageResumeSelectWrap = styled.div`
  position: absolute;
  top:0;
  `;

export const LeftDoor = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height:100%;
  background-color: ${({ theme }) => theme.black};
  z-index: 5;
`;

export const RightDoor = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height:100%;
  background-color: ${({ theme }) => theme.black};
  z-index: 5;
`;

export const IntroText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(255,255,255);
  opacity: 1;
  z-index: 3;
`;

export const EndingText = styled.div`
  position: absolute; 
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(255,255,255);
  opacity: 0;
  z-index: 3;
`;
export const Text = styled.div`
  font-size: 40px;
`;
