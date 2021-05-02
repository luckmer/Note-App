import React, { createContext, useState } from "react";
import { useEditor } from "../hooks/Draft";
import { useDragging } from "../hooks/UseDragging";
import { getPosition } from "../hooks/GetPosition";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [ref, x, y, width, height] = useDragging(openMenu);
  const [X, Y, ControlXRadius, ControlYRadius] = getPosition(
    y,
    x,
    height,
    width
  );
  const [
    notes,
    currentNoteId,
    editorState,
    setEditorState,
    addNote,
    openNote,
    deleteNote,
    toggleBlockType,
    toggleInlineStyle,
  ] = useEditor();

  const store = {
    DRAFT: {
      notes,
      currentNoteId,
      editorState,
      setEditorState,
      addNote,
      openNote,
      deleteNote,
      toggleBlockType,
      toggleInlineStyle,
    },
    MENU: {
      setOpenMenu,
      openMenu,
      ref,
      x,
      y,
      width,
      height,
      X,
      Y,
      ControlXRadius,
      ControlYRadius,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
