<script setup lang="ts"></script>

<template>
  <div class="card w-full bg-neutral shadow-xl">
    <div class="card-body">
      <h1 class="text-3xl font-bold underline">Students API</h1>
      <p class="text-md">
        Here you can see all students registered in the system. You can also add new students, edit
        or delete existing ones.
      </p>

      <p class="text-sm text-neutral-content italic">
        If you want to search for a specific student, you can use the search inputs, otherwise you
        can see all students by clicking on the search button without filling in any fields.
      </p>

      <div class="divider m-0"></div>

      <div
        class="flex items-center gap-4 mt-4 flex-col xl:flex-row md:justify-between md:items-center"
      >
        <slot name="form-search"></slot>

        <slot name="form-add"></slot>
      </div>
    </div>
  </div>
</template>
