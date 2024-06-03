<script setup lang="ts">
import MyButton from '@/components/atoms/MyButton.vue'
import MyTypography from '@/components/atoms/MyTypography.vue'

defineProps<{
  id: number
  header: string
  buttonLabel: string
}>()

defineEmits<{
  (event: 'confirm'): void
}>()
</script>

<template>
  <MyButton
    data-testid="generic-modal-button"
    variant="solid"
    color="error"
    :onclick="`confirm_modal_${id}.showModal()`"
  >
    {{ buttonLabel }}
  </MyButton>
  <dialog :id="'confirm_modal_' + id" class="modal">
    <div class="modal-box">
      <MyTypography variant="heading2">{{ header }}</MyTypography>
      <div class="modal-action">
        <form method="dialog">
          <MyButton color="error" class="mr-4">Cancel</MyButton>
          <MyButton
            data-testid="confirm-generic-modal-button"
            color="success"
            @click="$emit('confirm')"
            >Confirm</MyButton
          >
        </form>
      </div>
    </div>
  </dialog>
</template>
