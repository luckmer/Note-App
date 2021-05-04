import { renderHook } from "@testing-library/react-hooks";
import { getPosition } from "../hooks/GetPosition";

describe("getPosition hook", () => {
  test("half value", () => {
    const { result } = renderHook(() => getPosition(773, 758, 973, 958));
    expect(result.current).toEqual([568, 513, true, true]);
  });

  test("expect new width", () => {
    const { result } = renderHook(() => getPosition(773, 1223, 973, 1423));
    expect(result.current).toEqual([1033, 513, true, true]);
  });

  test("expect max width", () => {
    const { result } = renderHook(() => getPosition(783, 1720, 983, 1920));
    expect(result.current).toEqual([1530, 523, true, true]);
  });

  test("mobile version", () => {
    const { result } = renderHook(() => getPosition(773, 314, 973, 514));
    expect(result.current).toEqual([124, 513, true, true]);
  });
});
