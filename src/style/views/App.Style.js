import styled from "styled-components";

export const Main = styled.main`
  @media screen and (min-width: 772px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 772px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
