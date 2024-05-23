<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select :id="id" @change="onChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits(["change"]);

const onChange = (event) => {
  emit("change", event.target.value);
};
</script>

<style scoped>
select {
  margin: 10px;
}
</style>
