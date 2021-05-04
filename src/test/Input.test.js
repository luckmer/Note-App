import { fireEvent, render } from "@testing-library/react";
import FormData from "../components/menu/Form";

describe("input test", () => {
  const setup = () => {
    const utils = render(<FormData />);
    const name = utils.getByLabelText("name");
    const category = utils.getByLabelText("category");
    return {
      name,
      category,
      ...utils,
    };
  };

  test("should render Menu", () => {
    render(<FormData />);
  });

  test("should return name", () => {
    const { name } = setup();
    fireEvent.change(name, { target: { value: "home" } });
    expect(name.value).toBe("home");
  });

  test("should return category", () => {
    const { category } = setup();
    fireEvent.change(category, { target: { value: "school" } });
    expect(category.value).toBe("school");
  });

  test("have to be data", () => {
    const { category } = setup();
    fireEvent.change(category, { target: { value: "data" } });
    expect(category.value).not.toBe("");
  });

  test("should have name", () => {
    const { name } = setup();
    fireEvent.change(name, { target: { value: "home" } });
    expect(name.value).not.toBe("");
  });
});
