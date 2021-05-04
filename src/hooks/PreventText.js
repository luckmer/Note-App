export const PreventText = (notes, name, category) => {
  const nameValue = name && name.current.value;
  const categoryValue = category && category.current.value;

  const PreventCopy =
    notes && notes.filter((item) => item.name === nameValue.toString()).length;

  const Prevent =
    notes && notes.filter((item) => item.category === categoryValue.toString());

  const SameEl =
    Prevent &&
    Prevent.filter((item) => item.name === nameValue.toString()).length;

  return [nameValue, categoryValue, SameEl, PreventCopy];
};
