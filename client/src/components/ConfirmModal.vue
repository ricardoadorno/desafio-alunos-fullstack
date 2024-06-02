<script setup lang="ts">
defineProps<{
  id: number
  header: string
  buttonLabel: string
  buttonClass: string
}>()

defineEmits<{
  (event: 'confirm'): void
}>()
</script>

<template>
  <button :class="buttonClass" :onclick="`confirm_modal_${id}.showModal()`">
    {{ buttonLabel }}
  </button>
  <dialog :id="'confirm_modal_' + id" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ header }}</h3>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-error btn-outline mr-4">Cancel</button>
          <button class="btn btn-success" @click="$emit('confirm')">Confirm</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
