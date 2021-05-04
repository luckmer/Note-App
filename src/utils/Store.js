import React, { createContext, useState } from "react";
import { CategoriesHook } from "../hooks/CategoriesHook";
import { useDragging } from "../hooks/UseDragging";
import { getPosition } from "../hooks/GetPosition";
import { WindowEditor } from "../hooks/WindowEditor";
import DragEndDrop from "../hooks/SidebarDrag";
import { useEditor } from "../hooks/Draft";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobile, setMobileD] = useState(false);
  const [ref, x, y, width, height] = useDragging(openMenu);
  const [windowWith, windowHeight] = WindowEditor();
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
    setNotes,
  ] = useEditor();

  const {
    onDragOver,
    Style,
    onDrop,
    setDetect,
    UpdateDragWay,
    DragControl,
    dragData,
  } = DragEndDrop(notes, setNotes);

  const [categoriesPanel] = CategoriesHook(notes);

  const store = {
    DROP: {
      onDragOver,
      Style,
      onDrop,
      setDetect,
      UpdateDragWay,
      DragControl,
      dragData,
    },
    CATEGORY: {
      categoriesPanel,
    },
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
      setNotes,
      windowWith,
      windowHeight,
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
    MOBILE: {
      mobile,
      setMobileD,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
