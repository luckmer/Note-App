// import { useContext } from "react";
import { Note, SideBar } from "../export/Index";
import styled from "styled-components";
// import { StoreContext } from "../utils/Store";

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

function App() {
  // const data = useContext(StoreContext);

  return (
    <Main>
      <SideBar />
      <Note />
    </Main>
  );
}

export default App;
