<template>
  <label>
    <input type="checkbox" :checked="checked" @change="handleChange" />
    {{ label }}
  </label>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  checked: Boolean,
  label: String,
});

const emit = defineEmits(["update:checked"]);

const handleChange = () => {
  emit("update:checked", !props.checked);
};
</script>
