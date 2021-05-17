import { useContext, useCallback, createRef } from "react";
import { BlockStyleControls, InlineStyleControls } from "./BlockStyleControl";
import * as _ from "../../style/components/Note.Style";
import { StoreContext } from "../../utils/Store";
import { Editor } from "draft-js";

function Note() {
  const { DRAFT, DROP } = useContext(StoreContext);
  const { dragData } = DROP;
  const {
    editorState,
    setEditorState,
    toggleBlockType,
    toggleInlineStyle,
    notes,
    openNote,
  } = DRAFT;

  const handleChange = useCallback(
    (editorState) => setEditorState(editorState),
    [setEditorState]
  );

  const textInput = createRef();

  const onDragOver = (e) => e.preventDefault();

  const Drop = () => {
    const Id = dragData.current;
    const Find = notes.find((el) => el.id === Id);
    openNote(Find.id);
  };

  const BlockStyleControl = useCallback(
    () => BlockStyleControls({ editorState, onToggle: toggleBlockType }),
    [editorState, toggleBlockType]
  );

  const InlineStyleControl = useCallback(
    () => InlineStyleControls({ editorState, onToggle: toggleInlineStyle }),
    [editorState, toggleInlineStyle]
  );

  const EditorState = useCallback(
    () => (
      <Editor
        editorState={editorState}
        onChange={handleChange}
        ref={textInput}
      />
    ),
    [editorState, handleChange, textInput]
  );

  const focusTextInput = () => {
    textInput.current.focus();
  };

  return (
    <_.Section>
      <_.Nav>
        <_.NavDiv>
          <BlockStyleControl />
          <InlineStyleControl />
        </_.NavDiv>
      </_.Nav>
      <_.DivNote>
        <_.Div
          onDragOver={(e) => onDragOver(e)}
          onDrop={() => Drop()}
          onClick={() => focusTextInput()}
          id="here"
        >
          <_.NoteDiv>{notes.length ? <EditorState /> : ""}</_.NoteDiv>
        </_.Div>
      </_.DivNote>
    </_.Section>
  );
}

export default Note;
