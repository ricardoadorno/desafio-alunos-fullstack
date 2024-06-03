<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'info'
  }>(),
  {
    color: 'primary'
  }
)
</script>

<template>
  <button :class="['btn', `btn-${color}`]">
    <slot />
  </button>
</template>
