import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  padding: 0.5em 0.5em;
  transition: 0.6s;
  :hover {
    transform: translateX(-0.4em) translateY(-0.4em);
  }

  img {
    width : 5rem;
    height: 5rem;
    border-radius: 2.5rem; 
  }

  .right {
    margin-left: 1rem;
  }

  .title {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .subtitle {
    padding: 0.1em 0 ;
  }
`;

export default {};
