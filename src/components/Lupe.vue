<script setup lang="ts">
// A magnifier on the number line: the learner moves a slider and the line zooms into the interval that traps √2.
// It checks nothing: the exercises below the figure do. Without JavaScript the page shows a table and the nojs text.
import { computed, ref } from "vue";
import { LEFT, RIGHT, clampStage, describe, markerX, tickXs } from "./Lupe.ts";
import type { Stage } from "./Lupe.ts";

const props = defineProps<{
  /** The stages from the widest to the narrowest interval. */
  stages: Stage[];
  /** What is trapped, as written on the line, for example √2. */
  target: string;
  /** Label of the slider. */
  sliderLabel: string;
  /** Text of the sentence "<target> <between> <lower> <and> <upper>". */
  between: string;
  and: string;
  /** Texts of the two lines of squares. */
  squareLeft: string;
  squareRight: string;
  smaller: string;
  larger: string;
}>();

const stage = ref(0);
const current = computed(() => props.stages[clampStage(stage.value, props.stages.length)]!);
const xs = tickXs();
const sentence = computed(() => describe(current.value, props.target, props.between, props.and));
const x = computed(() => markerX(current.value.pos));
const sliderId = "lupe-stufe";
</script>

<template>
  <div class="lupe">
    <label :for="sliderId" class="lupe-label">{{ sliderLabel }}: {{ stage }}</label>
    <input
      :id="sliderId"
      v-model.number="stage"
      type="range"
      min="0"
      :max="stages.length - 1"
      step="1"
      class="lupe-slider"
    />
    <svg viewBox="0 0 320 110" class="lupe-svg" role="img" :aria-label="sentence">
      <line :x1="LEFT" y1="50" :x2="RIGHT" y2="50" stroke="currentColor" stroke-width="2" />
      <line
        v-for="(t, i) in xs"
        :key="i"
        :x1="t"
        :y1="i === 0 || i === 10 ? 38 : 44"
        :x2="t"
        :y2="i === 0 || i === 10 ? 62 : 56"
        stroke="currentColor"
        stroke-width="2"
      />
      <text :x="LEFT" y="82" text-anchor="middle" font-size="14" fill="currentColor">{{ current.lower }}</text>
      <text :x="RIGHT" y="82" text-anchor="middle" font-size="14" fill="currentColor">{{ current.upper }}</text>
      <line :x1="x" y1="22" :x2="x" y2="50" stroke="currentColor" stroke-width="2" />
      <circle :cx="x" cy="50" r="6" fill="currentColor" />
      <text :x="x" y="16" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">{{ target }}</text>
    </svg>
    <p class="lupe-text" aria-live="polite">{{ sentence }}</p>
    <p class="lupe-text">
      {{ squareLeft }} {{ current.lower }}² = {{ current.lowerSquare }} ({{ smaller }})<br />
      {{ squareRight }} {{ current.upper }}² = {{ current.upperSquare }} ({{ larger }})
    </p>
  </div>
</template>

<style scoped>
.lupe {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border: 1px solid var(--page-border);
  border-radius: 0.4rem;
  color: var(--page-text);
}

.lupe-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.lupe-slider {
  width: 100%;
  min-height: 44px;
  accent-color: var(--page-accent);
}

.lupe-svg {
  display: block;
  width: 100%;
  max-width: 28rem;
  height: auto;
}

.lupe-text {
  margin: 0.5rem 0 0;
}
</style>
