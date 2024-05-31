<script setup lang="ts">
import StudentCard from './components/StudentCard.vue'
import MyHeader from './components/MyHeader.vue'

const MOCK_STUDENTS = [
  { id: 1, name: 'John Doe', cpf: '123.456.789-00', email: '123' },
  { id: 2, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 3, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 4, name: 'John Doe', cpf: '123.456.789-00', email: '123' },
  { id: 5, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 6, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 7, name: 'John Doe', cpf: '123.456.789-00', email: '123' }
]
</script>

<template>
  <main class="container mx-auto p-4">
    <MyHeader />

    <section class="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StudentCard v-for="student in MOCK_STUDENTS" :key="student.id" v-bind="student" />
    </section>
  </main>
</template>
