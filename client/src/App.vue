<script setup lang="ts">
import StudentCard from '@/components/molecules/StudentCard.vue'
import MyHeader from '@/components/molecules/MyHeader.vue'
import studentStore from '@/stores/studentStore'
import MyTextInput from '@/components/atoms/MyTextInput.vue'
import MyButton from '@/components/atoms/MyButton.vue'
import MyTypography from '@/components/atoms/MyTypography.vue'
</script>

<template>
  <main class="container mx-auto p-4">
    <MyHeader>
      <template #form-search>
        <form
          class="flex flex-col gap-4 w-full lg:flex-row"
          @submit.prevent="studentStore.handleSearch"
        >
          <MyTextInput
            data-testid="name-filter-input"
            placeholder="Name"
            v-model="studentStore.filterParams.name"
          />
          <MyTextInput
            data-testid="cpf-filter-input"
            placeholder="CPF"
            v-model="studentStore.filterParams.cpf"
          />
          <MyTextInput
            data-testid="email-filter-input"
            placeholder="Email"
            v-model="studentStore.filterParams.email"
          />
          <MyButton data-testid="search-button" color="info">Search</MyButton>
        </form>
      </template>

      <template #form-add>
        <MyButton
          color="success"
          class="w-full lg:w-auto mt-4 md:mt-0"
          data-testid="add-button"
          onclick="add_modal.showModal()"
        >
          + Add new student
        </MyButton>
        <dialog id="add_modal" class="modal">
          <div class="modal-box">
            <MyTypography variant="heading2">Add a new student</MyTypography>

            <div class="flex flex-col gap-4 w-full my-4">
              <MyTextInput
                data-testid="name-create-input"
                placeholder="Name"
                v-model="studentStore.formState.name"
              />
              <MyTextInput
                data-testid="cpf-create-input"
                placeholder="CPF"
                maxlength="11"
                v-model="studentStore.formState.cpf"
              />
              <MyTextInput
                data-testid="email-create-input"
                placeholder="Email"
                v-model="studentStore.formState.email"
              />
            </div>
            <div class="modal-action">
              <form method="dialog" @submit="studentStore.clearForm">
                <MyButton color="error" class="mr-4">Cancel</MyButton>
                <MyButton
                  data-testid="cofirm-add-button"
                  color="success"
                  @click="() => studentStore.handleCreate()"
                >
                  Add
                </MyButton>
              </form>
            </div>
          </div>
        </dialog>
      </template>
    </MyHeader>

    <section
      class="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2 lg:grid-cols-4"
      data-testid="students-cards-list"
    >
      <StudentCard
        v-for="student in studentStore.studentsList"
        :key="student.id"
        v-bind="student"
        @delete="(id) => studentStore.handleDelete(id)"
      >
        <template #form-edit>
          <div class="flex flex-col gap-4 w-full my-4">
            <MyTextInput
              data-testid="name-edit-input"
              placeholder="Name"
              v-model="studentStore.formState.name"
            />
            <MyTextInput
              data-testid="cpf-edit-input"
              placeholder="CPF"
              maxlength="11"
              v-model="studentStore.formState.cpf"
            />
            <MyTextInput
              data-testid="email-edit-input"
              placeholder="Email"
              v-model="studentStore.formState.email"
            />
          </div>

          <div class="modal-action">
            <form method="dialog" @submit="studentStore.clearForm">
              <MyButton color="error" class="mr-4">Cancel</MyButton>
              <MyButton
                color="success"
                @click="() => studentStore.handleUpdate(student.id)"
                data-testid="confirm-edit-button"
              >
                Edit
              </MyButton>
            </form>
          </div>
        </template>
      </StudentCard>
    </section>
  </main>
</template>
