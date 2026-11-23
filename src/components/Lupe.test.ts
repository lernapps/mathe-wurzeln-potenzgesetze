import { expect, test } from "vite-plus/test";
import { LEFT, RIGHT, clampStage, describe, markerX, tickXs } from "./Lupe.ts";

test("the marker stays between the ends of the line", () => {
  expect(markerX(0)).toBe(LEFT);
  expect(markerX(1)).toBe(RIGHT);
  expect(markerX(0.5)).toBe((LEFT + RIGHT) / 2);
  expect(markerX(-3)).toBe(LEFT);
  expect(markerX(7)).toBe(RIGHT);
});

test("eleven ticks, one for each tenth, from end to end", () => {
  const xs = tickXs();
  expect(xs).toHaveLength(11);
  expect(xs[0]).toBe(LEFT);
  expect(xs[10]).toBe(RIGHT);
});

test("a stage index stays inside the stages", () => {
  expect(clampStage(2, 5)).toBe(2);
  expect(clampStage(9, 5)).toBe(4);
  expect(clampStage(-1, 5)).toBe(0);
  expect(clampStage(Number.NaN, 5)).toBe(0);
  expect(clampStage(1, 0)).toBe(0);
});

test("the description names both bounds", () => {
  const stage = { lower: "1,41", upper: "1,42", lowerSquare: "1,9881", upperSquare: "2,0164", pos: 0.42 };
  expect(describe(stage, "√2", "liegt zwischen", "und")).toBe("√2 liegt zwischen 1,41 und 1,42.");
});
