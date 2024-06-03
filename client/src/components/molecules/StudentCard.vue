<script setup lang="ts">
import studentStore from '@/stores/studentStore'
import ConfirmModal from '@/components/molecules/ConfirmModal.vue'
import MyTypography from '@/components/atoms/MyTypography.vue'
import MyButton from '@/components/atoms/MyButton.vue'

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
      <MyTypography variant="heading3" class="card-title text-neutral-content truncate">
        {{ name }}
      </MyTypography>

      <div class="divider m-0"></div>

      <MyTypography class="text-neutral-content truncate">
        <b>CPF:</b>
        {{ cpf }}
      </MyTypography>
      <MyTypography class="text-neutral-content truncate">
        <b>Email:</b>
        {{ email }}
      </MyTypography>
      <div class="card-actions justify-end">
        <MyButton
          data-testid="edit-button"
          color="info"
          :onclick="`edit_modal_${id}.showModal()`"
          @click="() => studentStore.setupEditForm(id)"
        >
          Edit
        </MyButton>
        <dialog :id="'edit_modal_' + id" class="modal">
          <div class="modal-box">
            <MyTypography variant="heading2">Edit {{ name }}</MyTypography>
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
