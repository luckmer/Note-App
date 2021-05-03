import { useContext } from "react";
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

  const handleChange = (editorState) => setEditorState(editorState);

  const onDragOver = (e) => e.preventDefault();

  const Drop = () => {
    const Id = dragData.current;
    const Find = notes.find((el) => el.id === Id);
    openNote(Find.id);
  };

  return (
    <_.Section>
      <_.Nav>
        <_.NavDiv>
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </_.NavDiv>
      </_.Nav>
      <_.DivNote>
        <_.Div onDragOver={(e) => onDragOver(e)} onDrop={() => Drop()}>
          <_.NoteDiv>
            <Editor editorState={editorState} onChange={handleChange} />
          </_.NoteDiv>
        </_.Div>
      </_.DivNote>
    </_.Section>
  );
}

export default Note;
