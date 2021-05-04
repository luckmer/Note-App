import { Note, SideBar, Menu } from "../export/Index";
import * as _ from "../style/views/App.Style";

function App() {
  return (
    <_.Main>
      <Menu />
      <SideBar />
      <Note />
    </_.Main>
  );
}

export default App;
