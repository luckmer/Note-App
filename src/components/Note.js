import React, { useContext } from "react";
import * as _ from "../style/components/Note.Style";
import { Editor } from "draft-js";
import { StoreContext } from "../utils/Store";

function Note() {
  const { DRAFT } = useContext(StoreContext);
  const { editorState, setEditorState } = DRAFT;

  const handleChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <_.Section>
      <_.Nav>
        <_.NavDiv>
          <_.P>U</_.P>
          <_.P>B</_.P>
          <_.P>I</_.P>
          <_.P>abc</_.P>
        </_.NavDiv>
      </_.Nav>
      <_.DivNote>
        <_.Div>
          <Editor editorState={editorState} onChange={handleChange} />
        </_.Div>
      </_.DivNote>
    </_.Section>
  );
}

export default Note;
