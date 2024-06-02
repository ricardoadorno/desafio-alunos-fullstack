<script setup lang="ts">
import studentStore from '@/stores/studentStore'
import ConfirmModal from './ConfirmModal.vue'

defineProps<{
  id: number
  name: string
  cpf: string
  email: string
}>()

defineEmits<{
  (event: 'delete', id: number): void
}>()
</script>

<template>
  <div class="card w-full bg-neutral shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold text-neutral-content truncate">
        {{ name }}
      </h2>

      <div class="divider m-0"></div>

      <p class="text-md text-neutral-content truncate">
        <b>CPF:</b>
        {{ cpf }}
      </p>
      <p class="text-md text-neutral-content truncate">
        <b>Email:</b>
        {{ email }}
      </p>
      <div class="card-actions justify-end">
        <button
          class="btn btn-info"
          :onclick="`edit_modal_${id}.showModal()`"
          @click="() => studentStore.setupEditForm(id)"
        >
          Edit
        </button>
        <dialog :id="'edit_modal_' + id" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Edit {{ name }}</h3>
            <slot name="form-edit"> </slot>
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
