<script setup lang="ts">
withDefaults(
  defineProps<{
    color: 'primary' | 'secondary' | 'error' | 'success' | 'info'
    variant: 'solid' | 'outline'
  }>(),
  {
    color: 'primary',
    variant: 'solid'
  }
)
</script>

<template>
  <button :class="['btn', `btn-${variant}`, `btn-${color}`]">
    <slot />
  </button>
</template>
