<script setup lang="ts">
import StudentCard from './components/StudentCard.vue'
import MyHeader from './components/MyHeader.vue'
import studentStore from './stores/studentStore'
</script>

<template>
  <main class="container mx-auto p-4">
    <MyHeader>
      <template #form-search>
        <form
          class="flex flex-col gap-4 w-full md:flex-row"
          @submit.prevent="studentStore.handleSearch"
        >
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered"
            v-model="studentStore.filterParams.name"
          />
          <input
            type="text"
            placeholder="CPF"
            class="input input-bordered"
            v-model="studentStore.filterParams.cpf"
          />
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered"
            v-model="studentStore.filterParams.email"
          />
          <button class="btn btn-primary">Search</button>
        </form>
      </template>

      <template #form-add>
        <button
          class="btn btn-success w-full md:w-auto md:ml-4 mt-4 md:mt-0"
          onclick="add_modal.showModal()"
        >
          Add
        </button>
        <dialog id="add_modal" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Add a new student</h3>

            <div class="flex flex-col gap-4 w-full my-4">
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
                v-model="studentStore.formState.name"
              />
              <input
                type="text"
                placeholder="CPF"
                maxlength="11"
                class="input input-bordered"
                v-model="studentStore.formState.cpf"
              />
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered"
                v-model="studentStore.formState.email"
              />
            </div>
            <div class="modal-action">
              <form method="dialog" @submit="studentStore.clearForm">
                <button class="btn btn-error btn-outline mr-4">Cancel</button>
                <button class="btn btn-success" @click="() => studentStore.handleCreate()">
                  Add
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </template>
    </MyHeader>

    <section class="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StudentCard
        v-for="student in studentStore.studentsList"
        :key="student.id"
        v-bind="student"
        @delete="(id) => studentStore.handleDelete(id)"
      >
        <template #form-edit>
          <div class="flex flex-col gap-4 w-full my-4">
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
              v-model="studentStore.formState.name"
            />
            <input
              type="text"
              placeholder="CPF"
              maxlength="11"
              class="input input-bordered"
              v-model="studentStore.formState.cpf"
            />
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered"
              v-model="studentStore.formState.email"
            />
          </div>

          <div class="modal-action">
            <form method="dialog" @submit="studentStore.clearForm">
              <button class="btn btn-error btn-outline mr-4">Cancel</button>
              <button class="btn btn-success" @click="() => studentStore.handleUpdate(student.id)">
                Edit
              </button>
            </form>
          </div>
        </template>
      </StudentCard>
    </section>
  </main>
</template>
