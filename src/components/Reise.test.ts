import { expect, test } from "vite-plus/test";
import { LEFT, RIGHT, clampStop, jump, lengthText, log10Length, markerX, sup } from "./Reise.ts";

const stops = [
  { name: "Proton", mantisse: 1, exponent: -15 },
  { name: "Mensch", mantisse: 1.7, exponent: 0 },
  { name: "Erde bis Sonne", mantisse: 1.5, exponent: 11 },
  { name: "Universum", mantisse: 8.8, exponent: 26 },
];

test("powers are written as superscript digits", () => {
  expect(sup(-15)).toBe("⁻¹⁵");
  expect(sup(7)).toBe("⁷");
});

test("a length is written with comma, dot and unit as in the app", () => {
  expect(lengthText(stops[0]!)).toBe("10⁻¹⁵ m");
  expect(lengthText(stops[1]!)).toBe("1,7 m");
  expect(lengthText(stops[2]!)).toBe("1,5 · 10¹¹ m");
});

test("the ruler runs from the smallest to the largest stop", () => {
  expect(markerX(0, stops)).toBe(LEFT);
  expect(markerX(3, stops)).toBe(RIGHT);
  expect(markerX(1, stops)).toBeGreaterThan(LEFT);
  expect(markerX(1, stops)).toBeLessThan(markerX(2, stops));
  expect(markerX(0, [stops[0]!])).toBe(LEFT);
});

test("the jump counts the powers of ten between two stops", () => {
  expect(jump(0, stops)).toBe(0);
  expect(jump(1, stops)).toBe(15);
  expect(jump(2, stops)).toBe(11);
  expect(log10Length(stops[1]!)).toBeCloseTo(0.2304, 3);
});

test("a stop index stays inside the stops", () => {
  expect(clampStop(2, 4)).toBe(2);
  expect(clampStop(9, 4)).toBe(3);
  expect(clampStop(-1, 4)).toBe(0);
  expect(clampStop(Number.NaN, 4)).toBe(0);
});
