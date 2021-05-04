import { renderHook } from "@testing-library/react-hooks";
import { CategoriesHook } from "../hooks/CategoriesHook";

describe("CategoriesHook", () => {
  test("should return only category", () => {
    const notes = [
      {
        id: "27b74e26-2697-4a28-97a8-1016fd5ed18c",
        content: "",
        name: "das",
        category: "dsa",
        alter: "dsa",
      },
      {
        id: "e65df27b-1cb6-4a78-8ea7-067176fb964f",
        content: "",
        name: "home",
        category: "dsa",
        alter: "home",
      },
    ];
    const { result } = renderHook(() => CategoriesHook(notes));
    expect(result.current).toEqual([["dsa", "home"]]);
  });

  test("expect the same category", () => {
    const notes = [
      {
        id: "27b74e26-2697-4a28-97a8-1016fd5ed18c",
        content: "",
        name: "home",
        category: "dsa",
        alter: "home",
      },
      {
        id: "e65df27b-1cb6-4a78-8ea7-067176fb964f",
        content: "",
        name: "home",
        category: "dsa",
        alter: "home",
      },
    ];
    const { result } = renderHook(() => CategoriesHook(notes));
    expect(result.current).toEqual([["home"]]);
  });

  test("expect the same data couple of times", () => {
    const notes = [
      {
        id: "27b74e26-2697-4a28-97a8-1016fd5ed18c",
        content: "",
        name: "home",
        category: "dsa",
        alter: "home",
      },
      {
        id: "27b74e26-2697-4a28-97a8-1016fd5ed18c",
        content: "",
        name: "home",
        category: "dsa",
        alter: "cookies",
      },
      {
        id: "27b74e26-2697-4a28-97a8-1016fd5ed18c",
        content: "",
        name: "home",
        category: "dsa",
        alter: "cookies",
      },
      {
        id: "27b74e26-2697-4a28-97a8-1016fd5ed18c",
        content: "",
        name: "home",
        category: "dsa",
        alter: "data",
      },
      {
        id: "e65df27b-1cb6-4a78-8ea7-067176fb964f",
        content: "",
        name: "home",
        category: "dsa",
        alter: "home",
      },
    ];
    const { result } = renderHook(() => CategoriesHook(notes));
    expect(result.current).toEqual([["home", "cookies", "data"]]);
  });

  test("can  by empty", () => {
    const notes = [];
    const { result } = renderHook(() => CategoriesHook(notes));
    expect(result.current).toEqual([[]]);
  });
});
