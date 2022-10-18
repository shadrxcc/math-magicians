import Calculate from "../calculate";
import Operate from "../operate";

describe("calculations", () => {
  test("AC when clicked should return null or 0", () => {
    const obj = {
      total: null,
      next: null,
      operation: "+",
    };

    expect(Calculate(obj, "AC")).toBe({
      total: null,
      next: null,
      operation: null,
    });
  });

  test("= performs addition when clicked", () => {
    const obj = {
      total: "2",
      next: "2",
      operation: "+",
    };

    expect(Calculate(obj, "=")).toBe({
      total: "4",
      next: null,
      operation: null,
    });
  });

  test("should return an obj", () => {
    const obj = {
      total: null,
      next: null,
      operation: "+",
    };

    expect(Calculate(obj, "5")).toBe({
      total: null,
      next: "5",
      operation: null,
    });
  });
});
