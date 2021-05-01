import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivNote = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  background-color: #f2f1f7;
  width: 95%;
  height: 95%;
  border-radius: 5px;
`;

export const Nav = styled.nav`
  border-bottom: 1px solid #d9d8dd;
`;

export const NavDiv = styled.div`
  display: flex;
  margin: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding: 15.4px;
`;

export const P = styled.p`
  line-height: 1;
  font-size: 20px;
  color: #333;
  font-family: monospace;
  font-weight: bold;
  margin: 0 0.8rem;
  padding: 0.2rem 0.8rem;

  cursor: pointer;
`;
