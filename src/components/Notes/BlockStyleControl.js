import { block, inline } from "./BlockStyle";
import { Button } from "./Button";

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return block.map((type, i) => (
    <Button
      key={i}
      active={type.style === blockType}
      label={type.label}
      onToggle={props.onToggle}
      style={type.style}
    />
  ));
};

const InlineStyleControls = (props) => {
  const { editorState } = props;
  const currentStyle = editorState.getCurrentInlineStyle();

  return inline.map((type) => (
    <Button
      key={type.label}
      active={currentStyle.has(type.style)}
      label={type.label}
      onToggle={props.onToggle}
      style={type.style}
    />
  ));
};

export { BlockStyleControls, InlineStyleControls };
