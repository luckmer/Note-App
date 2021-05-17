import { useContext, useMemo } from "react";
import * as _ from "../../style/components/SideBar.Style";
import { StoreContext } from "../../utils/Store";
import MapByCategory from "./MapByCategory";

function SideBar() {
  const { DRAFT, DROP, CATEGORY, MOBILE } = useContext(StoreContext);
  const { notes, windowWith, openNote } = DRAFT;
  const { onDragOver, Style, onDrop, setDetect, UpdateDragWay, DragControl } =
    DROP;
  const { categoriesPanel } = CATEGORY;
  const { mobile, setMobileD } = MOBILE;

  const handleClick = (id) => {
    if (windowWith <= 722) {
      openNote(id);
      setMobileD(!mobile);
    }
  };

  const Category = useMemo(() => categoriesPanel, [categoriesPanel]);

  return (
    <_.Section open={mobile}>
      <_.Header>
        <_.Span>Notes</_.Span>
        <_.Mobile open={windowWith <= 722} onClick={() => setMobileD(!mobile)}>
          X
        </_.Mobile>
      </_.Header>
      <_.Data>
        <_.Div>
          {Category.map((data, i) => (
            <MapByCategory
              key={i}
              data={data}
              handleClick={handleClick}
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
