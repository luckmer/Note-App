import { useState, useEffect, useCallback } from "react";

const Style = (e) => e.target.classList.remove("Click");

const DragEndDrop = (notes, setNotes) => {
  const [dragData, setDragData] = useState({ current: "", target: "" });
  const [detect, setDetect] = useState(false);
  const [Update, setUpdate] = useState([]);

  const Return = useCallback((obj, current, data) => {
    return {
      ...data,
      name: obj && obj.name,
      category: obj && obj.category,
      id: current && current,
    };
  }, []);

  const UpdateArray = useCallback(
    (id, cat) => {
      return notes.filter((data) => {
        if (data.name === id) data.category = cat;
        return data;
      });
    },
    [notes]
  );

  const onDrop = useCallback(
    (e, cat) => {
      const id = e.dataTransfer.getData("id");
      const tasks = UpdateArray(id, cat);
      setNotes(tasks);
      Style(e);
    },
    [setNotes, UpdateArray]
  );

  const onDragStart = useCallback(
    (e, id) => {
      e.dataTransfer.setData("id", id);

      setDragData({
        ...dragData,
        current: e.target.id,
      });
    },
    [dragData]
  );

  const onDragOver = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.classList.value === "sc-bqiQRQ boJAzj") {
        e.target.classList.add("Click");
      }

      setDragData({
        ...dragData,
        target: e.target.id,
      });
    },
    [dragData]
  );

  const DragControl = useCallback(
    (e, name) => {
      setDetect(!detect);
      onDragStart(e, name.name);
    },
    [detect, onDragStart]
  );

  const DataBlock = useCallback(
    (notes, e) => {
      const current = dragData.current;
      const target = e.target.id;

      const One = notes.find((el) => el.id === current);
      const two = notes.find((el) => el.id === target);
      const OneBlocker = One && One.category;
      const TwoBlocker = two && two.category;

      return [OneBlocker, TwoBlocker, One, two, target, current];
    },
    [dragData]
  );

  const UpdateDragWay = useCallback(
    (e) => {
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
    },
    [notes, DataBlock, Return]
  );

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
