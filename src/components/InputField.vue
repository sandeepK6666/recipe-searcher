<template>
  <label :for="id">{{ label }}</label>
  <input
    :type="type"
    :id="id"
    :value="modelValue"
    @input="handleInput($event.target.value)"
  />
  <slot></slot>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  type: String,
  id: String,
  label: String,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (newValue) => {
  console.log("newValue", newValue);
  emit("update:modelValue", newValue);
};
</script>
