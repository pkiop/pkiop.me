import styled from 'styled-components';
import TextComponent from 'components/atoms/Text';
import RecodeComponent from 'components/organisms/Recode';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 8rem;
`;

export const Title = styled.div`
  width: 160px;
  height: 35px;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  margin: 25px;
  margin-top: 3rem;
`;

export const Line = styled.div`
  width: 80px;
  height: 5px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.subColor};
  margin-bottom: 50px;
`;

export const Picture = styled.img`
  width:200px;
  height:200px;
  border-radius: 100px;
  margin: 30px;
`;

export const MainText = styled(TextComponent)`
  width: 90%;
  font-size: 1rem;
  margin-top: 2rem;
  @media screen and (min-width: 1000px) {
    width: 60%;
    font-size: 1.2rem;
  }
`;

export const Recode = styled(RecodeComponent)`
  margin-bottom: 1em;
`;

export const RecodeWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
