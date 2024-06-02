<script setup lang="ts">
withDefaults(
  defineProps<{
    variant: keyof typeof variantMap
    tag?: keyof HTMLElementTagNameMap
  }>(),
  {
    variant: 'body'
  }
)

const variantMap = {
  heading1: 'text-3xl font-bold underline',
  heading2: 'font-bold text-lg',
  heading3: 'text-2xl font-bold',
  body: 'text-md',
  caption: 'text-sm text-neutral-content italic'
}

const defaultTagMap = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  body: 'p',
  caption: 'span'
}
</script>

<template>
  <component :is="tag ? tag : defaultTagMap[variant]" :class="variantMap[variant]">
    <slot />
  </component>
</template>
