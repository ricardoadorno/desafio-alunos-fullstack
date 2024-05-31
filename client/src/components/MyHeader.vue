<script setup lang="ts">
import StudentForm from './StudentForm.vue'
</script>

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
        <div class="flex flex-col gap-4 w-full md:flex-row">
          <input type="text" placeholder="Name" class="input input-bordered" />
          <input type="text" placeholder="CPF" class="input input-bordered" />
          <input type="text" placeholder="Email" class="input input-bordered" />
          <button class="btn btn-primary">Search</button>
        </div>

        <button
          class="btn btn-success w-full md:w-auto md:ml-4 mt-4 md:mt-0"
          onclick="add_modal.showModal()"
        >
          Add
        </button>
        <dialog id="add_modal" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Add a new student</h3>
            <StudentForm />
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-error btn-outline mr-4">Cancel</button>
                <button class="btn btn-success">Add</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </div>
</template>
