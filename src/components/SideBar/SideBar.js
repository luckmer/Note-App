import { useContext } from "react";
import * as _ from "../../style/components/SideBar.Style";
import { StoreContext } from "../../utils/Store";
import MapByCategory from "./MapByCategory";

function SideBar() {
  const { DRAFT, DROP, CATEGORY } = useContext(StoreContext);
  const { notes } = DRAFT;
  const {
    onDragOver,
    Style,
    onDrop,
    setDetect,
    UpdateDragWay,
    DragControl,
  } = DROP;
  const { categoriesPanel } = CATEGORY;

  return (
    <_.Section>
      <_.Header>
        <_.Span>Notes</_.Span>
      </_.Header>
      <_.Data>
        <_.Div>
          {categoriesPanel.map((data, i) => (
            <MapByCategory
              key={i}
              data={data}
              onDragOver={onDragOver}
              Style={Style}
              notes={notes}
              onDrop={onDrop}
              setDetect={setDetect}
              UpdateDragWay={UpdateDragWay}
              DragControl={DragControl}
            />
          ))}
        </_.Div>
      </_.Data>
    </_.Section>
  );
}

export default SideBar;
