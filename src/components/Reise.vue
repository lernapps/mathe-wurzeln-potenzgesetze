<script setup lang="ts">
// A slider for the journey from the proton to the universe: the learner picks a stop and sees its length, where it lies
// on a ruler of powers of ten and by how many powers of ten it is larger than the stop before. It checks nothing.
import { computed, ref } from "vue";
import { LEFT, RIGHT, clampStop, jump, lengthText, markerX, sup } from "./Reise.ts";
import type { Stop } from "./Reise.ts";

const props = defineProps<{
  /** The stops from the smallest to the largest length. */
  stops: Stop[];
  /** Label of the slider. */
  sliderLabel: string;
  /** Text at the first stop. */
  startText: string;
  /** The jump line: "<jumpPrefix> 10ⁿ <jumpSuffix>". */
  jumpPrefix: string;
  jumpSuffix: string;
  /** Text before the name of the stop before. */
  beforeText: string;
}>();

const stop = ref(0);
const index = computed(() => clampStop(stop.value, props.stops.length));
const current = computed(() => props.stops[index.value]!);
const before = computed(() => (index.value > 0 ? props.stops[index.value - 1]! : null));
const x = computed(() => markerX(index.value, props.stops));
const sliderId = "reise-halt";
const ticks = [-15, -10, -5, 0, 5, 10, 15, 20, 25];
const tickX = (e: number) => LEFT + ((e + 15) / (26.95 + 15)) * (RIGHT - LEFT);
</script>

<template>
  <div class="reise">
    <label :for="sliderId" class="reise-label">
      <svg viewBox="0 0 24 24" width="20" height="20" class="reise-icon" aria-hidden="true" focusable="false">
        <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        <polyline
          points="13,6 20,12 13,18"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {{ sliderLabel }}: {{ index + 1 }} / {{ stops.length }}
    </label>
    <input
      :id="sliderId"
      v-model.number="stop"
      :aria-label="sliderLabel"
      type="range"
      min="0"
      :max="stops.length - 1"
      step="1"
      class="reise-slider"
    />
    <svg viewBox="0 0 320 90" class="reise-svg" role="img" :aria-label="`${current.name}: ${lengthText(current)}`">
      <line :x1="LEFT" y1="40" :x2="RIGHT" y2="40" stroke="currentColor" stroke-width="2" />
      <g v-for="e in ticks" :key="e">
        <line :x1="tickX(e)" y1="34" :x2="tickX(e)" y2="46" stroke="currentColor" stroke-width="2" />
        <text :x="tickX(e)" y="64" text-anchor="middle" font-size="10" fill="currentColor">10{{ sup(e) }}</text>
      </g>
      <line :x1="x" y1="12" :x2="x" y2="40" stroke="currentColor" stroke-width="2" />
      <circle :cx="x" cy="40" r="6" fill="currentColor" />
      <text x="160" y="84" text-anchor="middle" font-size="10" fill="currentColor">Länge in Metern</text>
    </svg>
    <p class="reise-text" aria-live="polite">
      <strong>{{ current.name }}</strong
      >: {{ lengthText(current) }}
    </p>
    <p class="reise-text">
      <template v-if="before"
        >{{ jumpPrefix }} 10{{ sup(jump(index, stops)) }} {{ jumpSuffix }} ({{ beforeText }}
        {{ before.name }}).</template
      >
      <template v-else>{{ startText }}</template>
    </p>
  </div>
</template>

<style scoped>
.reise {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border: 1px solid var(--page-border);
  border-radius: 0.4rem;
  color: var(--page-text);
}

.reise-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.reise-icon {
  vertical-align: -3px;
  margin-right: 0.25rem;
}

.reise-slider {
  width: 100%;
  min-height: 44px;
  accent-color: var(--page-accent);
}

.reise-svg {
  display: block;
  width: 100%;
  max-width: 28rem;
  height: auto;
}

.reise-text {
  margin: 0.5rem 0 0;
}
</style>
