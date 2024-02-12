<script setup lang="ts">
import type { BaseTooltipPlacement } from '../types';
import { getTooltipClasses } from '../utils';

const props = defineProps<{
  placement?: BaseTooltipPlacement;
}>();
let classes: string = '';
classes = getTooltipClasses(props.placement as BaseTooltipPlacement);
</script>

<template>
  <div
    class="relative rounded border border-tertiary bg-tertiary-light p-2 px-2 py-1 text-xs"
    :class="[
      classes,
      placement &&
        'before:absolute before:h-0 before:w-0 before:border-[9px] before:border-solid before:border-tertiary',
    ]"
  >
    <slot name="text" />
  </div>
</template>
