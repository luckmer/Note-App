import { useState, useEffect } from "react";

const Return = (obj, current, data) => {
  return {
    ...data,
    name: obj && obj.name,
    category: obj && obj.category,
    id: current && current,
  };
};

const Style = (e) => e.target.classList.remove("Click");

const DragEndDrop = (notes, setNotes) => {
  const [dragData, setDragData] = useState({ current: "", target: "" });
  const [detect, setDetect] = useState(false);
  const [Update, setUpdate] = useState([]);

  const onDrop = (e, cat) => {
    const id = e.dataTransfer.getData("id");
    const tasks = UpdateArray(id, cat);
    setNotes(tasks);
    Style(e);
  };

  const UpdateArray = (id, cat) => {
    return notes.filter((data) => {
      if (data.name === id) data.category = cat;
      return data;
    });
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);

    setDragData({
      ...dragData,
      current: e.target.id,
    });
  };

  const onDragOver = (e) => {
    e.preventDefault();

    if (e.target.classList.value === "sc-bqiQRQ boJAzj") {
      e.target.classList.add("Click");
    }

    setDragData({
      ...dragData,
      target: e.target.id,
    });
  };

  const DragControl = (e, name) => {
    setDetect(!detect);
    onDragStart(e, name.name);
  };

  function DataBlock(notes, e) {
    const current = dragData.current;
    const target = e.target.id;

    const One = notes.find((el) => el.id === current);
    const two = notes.find((el) => el.id === target);
    const OneBlocker = One && One.category;
    const TwoBlocker = two && two.category;

    return [OneBlocker, TwoBlocker, One, two, target, current];
  }

  const UpdateDragWay = (e) => {
    const [OneBlocker, TwoBlocker, One, two, target, current] = DataBlock(
      notes,
      e
    );
    if (OneBlocker === TwoBlocker) {
      const update = notes.map((data) => {
        if (target === data.id) return Return(One, current, data);
        if (current === data.id) return Return(two, target, data);
        return data;
      });

      setUpdate(update);
    }
  };

  useEffect(() => {
    Update.length && setNotes(Update);
  }, [setNotes, Update]);

  return {
    onDrop,
    onDragStart,
    onDragOver,
    UpdateDragWay,
    DragControl,
    Style,
    setDetect,
    dragData,
  };
};
export default DragEndDrop;
