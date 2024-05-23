<template>
  <a :href="link">
    {{ buttonLabel }}
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  buttonLabel: String,
  link: String,
});
</script>
