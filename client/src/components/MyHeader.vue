<script setup lang="ts"></script>

<template>
  <div class="card w-full bg-neutral shadow-xl">
    <div class="card-body">
      <h1 class="text-3xl font-bold underline">Students API</h1>
      <p class="text-sm text-neutral-content mt-w">
        Here you can see all students registered in the system. You can also add new students, edit
        or delete existing ones.
      </p>

      <div class="divider m-0"></div>

      <div
        class="flex items-center gap-4 mt-4 flex-col md:flex-row md:justify-between md:items-center"
      >
        <slot name="form-search"></slot>

        <slot name="form-add"></slot>
      </div>
    </div>
  </div>
</template>
