<script setup lang="ts">
defineProps<{
  name: string
  cpf: string
  email: string
}>()
</script>

<template>
  <div class="card w-full bg-neutral shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold text-neutral-content m">{{ name }}</h2>

      <div class="divider m-0"></div>

      <p class="text-md text-neutral-content">
        <b>CPF:</b>
        {{ cpf }}
      </p>
      <p class="text-md text-neutral-content">
        <b>Email:</b>
        {{ email }}
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-info">Edit</button>
        <button class="btn btn-error">Remove</button>
      </div>
    </div>
  </div>
</template>
