import { Note, SideBar, Menu } from "../export/Index";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Main>
      <Menu />
      <SideBar />
      <Note />
    </Main>
  );
}

export default App;
