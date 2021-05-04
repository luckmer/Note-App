import { createRef } from "react";
import { PreventText } from "../../hooks/PreventText";
import * as _ from "../../style/components/MenuOption";

const FormData = ({ notes, handleClick, addNote }) => {
  const name = createRef();
  const category = createRef();

  const handleSubmit = (e) => {
    const [nameValue, categoryValue, SameEl, PreventCopy] = PreventText(
      notes,
      name,
      category
    );

    e.preventDefault();

    if (nameValue && categoryValue && SameEl <= 0 && PreventCopy <= 0) {
      addNote(nameValue, categoryValue);
      handleClick();
      e.target.reset();
    }
  };

  return (
    <_.Form onSubmit={handleSubmit}>
      <_.Input aria-label="name" placeholder="name" ref={name && name} />
      <_.Input
        aria-label="category"
        placeholder="category"
        ref={category && category}
      />
      <_.SubmitDiv>
        <_.Submit type="submit" aria-label="submit">
          Create
        </_.Submit>
      </_.SubmitDiv>
    </_.Form>
  );
};

export default FormData;
