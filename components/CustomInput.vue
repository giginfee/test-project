<template>
  <div class="mb-3">
    <h3 class="mt-1 pt-0">{{ title }}</h3>
    <InputText
      class="w-full"
      @input="$emit('update:modelValue', $event.target.value.trim())"
      :maxlength="maxLength"
      v-bind="$attrs"
      @focus="
        () => {
          isInputActive = true;
          isUpdated = true;
        }
      "
      @blur="
        () => {
          isInputActive = false;
        }
      "
      :value="modelValue"
      :invalid="
        (!isInputActive &&
          (isUpdated || showIfInvalid) &&
          modelValue.trim().length < minLength) ||
        errorMessage.length !== 0
      "
    />
    <div
      v-if="showLengthInfo"
      class="w-full flex justify-content-between text-xs p-1"
    >
      Введіть щонайменше {{ minLength }} символів<span
        >{{ modelValue.trim().length }}/70</span
      >
    </div>
    <div class="w-full flex justify-content-between text-xs p-1">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isUpdated = ref(false);
const isInputActive = ref(false);

const props = defineProps({
  modelValue: String,
  showIfInvalid: {
    type: Boolean,
    required: true,
    default: false,
  },
  minLength: {
    type: Number,
    required: true,
  },
  maxLength: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  showLengthInfo: {
    type: Boolean,
    default: false,
  },
});
</script>
