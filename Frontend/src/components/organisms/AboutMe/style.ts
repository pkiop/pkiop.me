import styled from 'styled-components';

export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 1000px;
margin: 1rm 8rem;
`;

export const Title = styled.div`
width: 160px;
height: 35px;
font-size: 35px;
font-weight: 300;
text-align: center;
margin: 25px;
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

export const MainText = styled.div`
font-size: 15px;
`;
