import React, { useContext, useState, useEffect } from "react";
import * as _ from "../../style/components/SideBar.Style";
import { StoreContext } from "../../utils/Store";

const Return = (obj, current, data) => {
  return {
    ...data,
    name: obj && obj.name,
    category: obj && obj.category,
    id: current && current,
  };
};

function SideBar() {
  const { DRAFT } = useContext(StoreContext);
  const { notes, OpenById, setNotes } = DRAFT;
  // const [detect, setDetect] = useState(false);
  // const [categories, setCategories] = useState([]);
  // const [dragData, setDragData] = useState({ current: "", target: "" });
  // const [Update, setUpdate] = useState([]);
  // const [DroppedData, setDroppedData] = useState([]);

  // useEffect(() => {
  //   const category = notes.map((item) => item.alter);
  //   setCategories(category);
  // }, [notes]);

  // const categoriesPanel = [...new Set(categories)];

  // const Style = (e) => e.target.classList.remove("Click");
  // const onDragOver = () => {};

  return (
    <_.Section>
      <_.Header>
        <_.Span>Search</_.Span>
      </_.Header>
      <_.Data>
        <_.Div>
          {/* {categoriesPanel.map((data, i) => {
            const FilterByCategory = notes.filter(
              (item) => item.category.trim() === data.trim()
            );
            return (
              <div key={data}>
                <div>
                  <header>{data}</header>
                </div>
                <div>
                  {FilterByCategory.map((name, i) => (
                    <div key={i} id={name.id} draggable>
                      <span>
                        <div>
                          <div id={name.id}>
                            <p>{name.name}</p>
                          </div>
                        </div>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })} */}
        </_.Div>
      </_.Data>
    </_.Section>
  );
}

export default SideBar;
