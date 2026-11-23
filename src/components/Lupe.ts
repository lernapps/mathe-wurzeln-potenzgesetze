// Logic of the "Lupe" on the page that traps √2: stages of an interval, each ten times narrower. Pure functions.
export type Stage = {
  lower: string;
  upper: string;
  lowerSquare: string;
  upperSquare: string;
  /** Position of the target between the bounds, 0 (left) to 1 (right). */
  pos: number;
};

export const LEFT = 20;
export const RIGHT = 300;

/** The x coordinate of the target in the drawing. */
export function markerX(pos: number): number {
  const p = Math.min(1, Math.max(0, pos));
  return LEFT + p * (RIGHT - LEFT);
}

/** The x coordinates of the eleven ticks, one for each tenth of the interval. */
export function tickXs(): number[] {
  return Array.from({ length: 11 }, (_, i) => LEFT + (i * (RIGHT - LEFT)) / 10);
}

/** A stage index kept inside 0 … count − 1 (a slider value comes as text). */
export function clampStage(value: number, count: number): number {
  if (!Number.isFinite(value) || count < 1) return 0;
  return Math.min(count - 1, Math.max(0, Math.round(value)));
}

/** The sentence under the drawing for a stage, for everyone who cannot see the drawing. */
export function describe(stage: Stage, target: string, between: string, and: string): string {
  return `${target} ${between} ${stage.lower} ${and} ${stage.upper}.`;
}
