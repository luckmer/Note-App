import { useState, useEffect } from "react";
import { RichUtils, EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";

const converter = {
  toContent: (editorState) => convertToRaw(editorState.getCurrentContent()),
  toEditorState: (note) => {
    return EditorState.createWithContent(convertFromRaw(note.content));
  },
};

export const useEditor = () => {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    savedNotes.length && setNotes(savedNotes);
  }, []);

  useEffect(() => {
    if (!currentNoteId && notes.length) {
      setCurrentNoteId(notes[0].id);
      setEditorState(converter.toEditorState(notes[0]));
    }
  }, [notes, currentNoteId]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const updateNote = (editorState) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === currentNoteId) {
        note.content = converter.toContent(editorState);
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  useEffect(() => notes.length && updateNote(editorState), [
    editorState,
    notes.length,
  ]);

  const openNote = (id) => {
    setCurrentNoteId(id);
    const noteToOpen = notes.find((note) => note.id === id);
    setEditorState(converter.toEditorState(noteToOpen));
  };

  const addNote = () => {
    const emptyEditorState = EditorState.createEmpty();

    const newNote = {
      id: new Date(),
      content: converter.toContent(emptyEditorState),
    };

    setNotes([...notes, newNote]);
    setCurrentNoteId(newNote.id);
    setEditorState(converter.toEditorState(newNote));
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== currentNoteId);
    setNotes(updatedNotes);
    if (updatedNotes.length > 0) {
      setCurrentNoteId(updatedNotes[0].id);
      setEditorState(converter.toEditorState(updatedNotes[0]));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  };

  const toggleBlockType = (blockType) =>
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));

  const toggleInlineStyle = (style) =>
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));

  return [
    notes,
    currentNoteId,
    editorState,
    setEditorState,
    addNote,
    openNote,
    deleteNote,
    toggleBlockType,
    toggleInlineStyle,
  ];
};
