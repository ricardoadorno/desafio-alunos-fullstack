<script setup lang="ts">
import StudentCard from './components/StudentCard.vue'
import MyHeader from './components/MyHeader.vue'
import type { Student } from './common/types/Student'
import { onMounted, ref } from 'vue'
import { StudentService } from './services/api/student/StudentService'

const studentService = new StudentService()

const studentList = ref<Student[]>([])

const addForm = ref<Partial<Student>>({
  name: '',
  cpf: '',
  email: ''
})

const editForm = ref<Partial<Student>>({
  name: '',
  cpf: '',
  email: ''
})

const filterParams = ref({
  name: '',
  cpf: '',
  email: ''
})

onMounted(async () => {
  const studentsData = await studentService.getAll()

  studentList.value = studentsData
})

const handleSearch = async () => {
  // const studentsData = await studentService.getAll(filterParams.value)
  // students.value = studentsData
}

const handleAdd = async (student: Partial<Student>) => {
  console.log(student)
}

const handleEdit = async (id: number, student: Partial<Student>) => {
  console.log(id, student)
}

const handleDelete = async (id: number) => {
  console.log(id)
}
</script>

<template>
  <main class="container mx-auto p-4">
    <MyHeader>
      <template #form-search>
        <form class="flex flex-col gap-4 w-full md:flex-row" @submit.prevent="handleSearch">
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered"
            v-model="filterParams.name"
          />
          <input
            type="text"
            placeholder="CPF"
            class="input input-bordered"
            v-model="filterParams.cpf"
          />
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered"
            v-model="filterParams.email"
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
                v-model="addForm.name"
              />
              <input
                type="text"
                placeholder="CPF"
                class="input input-bordered"
                v-model="addForm.cpf"
              />
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered"
                v-model="addForm.email"
              />
            </div>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-error btn-outline mr-4">Cancel</button>
                <button class="btn btn-success" @click="() => handleAdd(addForm)">Add</button>
              </form>
            </div>
          </div>
        </dialog>
      </template>
    </MyHeader>

    <section class="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StudentCard
        v-for="student in studentList"
        :key="student.id"
        v-bind="student"
        @delete="handleDelete"
        @edit="() => handleEdit(student.id, editForm)"
      >
        <template #form-edit>
          <div class="flex flex-col gap-4 w-full my-4">
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
              v-model="editForm.name"
            />
            <input
              type="text"
              placeholder="CPF"
              class="input input-bordered"
              v-model="editForm.cpf"
            />
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered"
              v-model="editForm.email"
            />
          </div>
        </template>
      </StudentCard>
    </section>
  </main>
</template>
