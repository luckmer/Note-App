import { useContext } from "react";
import { BlockStyleControls, InlineStyleControls } from "./BlockStyleControl";
import * as _ from "../../style/components/Note.Style";
import { StoreContext } from "../../utils/Store";
import { Editor } from "draft-js";

function Note() {
  const { DRAFT } = useContext(StoreContext);
  const {
    editorState,
    setEditorState,
    toggleBlockType,
    toggleInlineStyle,
  } = DRAFT;

  const handleChange = (editorState) => setEditorState(editorState);

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
        <_.Div>
          <_.EditorDiv>
            <Editor editorState={editorState} onChange={handleChange} />
          </_.EditorDiv>
        </_.Div>
      </_.DivNote>
    </_.Section>
  );
}

export default Note;
