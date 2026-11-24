// Logic of the "Reise" on the page about scientific notation: stops from the atom to the universe, shown on a ruler of
// powers of ten. Pure functions.
export type Stop = { name: string; mantisse: number; exponent: number };

export const LEFT = 20;
export const RIGHT = 300;
const NBSP = " ";
const SUPER: Record<string, string> = {
  "-": "⁻",
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
};

/** An integer as superscript digits, for example -15 becomes ⁻¹⁵. */
export function sup(n: number): string {
  return String(Math.round(n))
    .split("")
    .map((c) => SUPER[c] ?? c)
    .join("");
}

/** The length of a stop in metres as written in the app: 1,5 · 10¹¹ m, 10⁻¹⁰ m or 1,7 m. */
export function lengthText(s: Stop): string {
  const m = String(s.mantisse).replace(".", ",");
  if (s.exponent === 0) return `${m}${NBSP}m`;
  if (s.mantisse === 1) return `10${sup(s.exponent)}${NBSP}m`;
  return `${m} · 10${sup(s.exponent)}${NBSP}m`;
}

/** The decimal logarithm of the length in metres. */
export function log10Length(s: Stop): number {
  return Math.log10(s.mantisse) + s.exponent;
}

/** The x coordinate of a stop on the ruler, from the smallest to the largest stop. */
export function markerX(i: number, stops: Stop[]): number {
  if (stops.length < 2) return LEFT;
  const logs = stops.map(log10Length);
  const lo = Math.min(...logs);
  const hi = Math.max(...logs);
  const p = (logs[Math.min(stops.length - 1, Math.max(0, i))]! - lo) / (hi - lo);
  return LEFT + p * (RIGHT - LEFT);
}

/** By how many powers of ten the length grows from the stop before to this stop (rounded), 0 for the first stop. */
export function jump(i: number, stops: Stop[]): number {
  if (i <= 0 || i >= stops.length) return 0;
  return Math.round(log10Length(stops[i]!) - log10Length(stops[i - 1]!));
}

/** A stop index kept inside 0 … count − 1 (a slider value comes as text). */
export function clampStop(value: number, count: number): number {
  if (!Number.isFinite(value) || count < 1) return 0;
  return Math.min(count - 1, Math.max(0, Math.round(value)));
}
