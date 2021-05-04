import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormData from "../components/menu/Form";

describe("test", () => {
  const setup = () => {
    const utils = render(<FormData />);
    const name = utils.getByLabelText(/name/i);
    const category = utils.getByLabelText(/category/i);
    const submit = utils.getByLabelText(/submit/i);
    return { name, category, submit };
  };

  test("should render", () => {
    render(<FormData />);
  });

  test("allows to set data", () => {
    const { name, category, submit } = setup();
    expect(name).not.toBeDisabled();
    expect(category).not.toBeDisabled();

    name.value = "name";
    category.value = "category";
    userEvent.click(submit);
  });

  test("create new type of category", () => {
    const { name, category, submit } = setup();
    expect(name).not.toBeDisabled();
    expect(category).not.toBeDisabled();

    name.value = "home";
    category.value = "home";
    userEvent.click(submit);
  });
});
