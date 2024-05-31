<script setup lang="ts">
import type { Student } from '@/common/types/Student'
import ConfirmModal from './ConfirmModal.vue'

defineProps<{
  id: number
  name: string
  cpf: string
  email: string
}>()

defineEmits<{
  (event: 'delete', id: number): void
  (event: 'edit', id: number, student: Partial<Student>): void
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
        <button class="btn btn-info" :onclick="`edit_modal_${id}.showModal()`">Edit</button>
        <dialog :id="'edit_modal_' + id" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Edit {{ name }}</h3>
            <slot name="form-edit"> </slot>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-error btn-outline mr-4">Cancel</button>
                <button class="btn btn-success" @click="() => $emit('edit', id, {})">Edit</button>
              </form>
            </div>
          </div>
        </dialog>

        <ConfirmModal
          :id="id"
          :header="`Are you sure you want to remove ${name}?`"
          buttonLabel="Remove"
          buttonClass="btn btn-error"
          @confirm="() => $emit('delete', id)"
        />
      </div>
    </div>
  </div>
</template>
