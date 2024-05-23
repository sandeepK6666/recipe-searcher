<template>
  <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
    <img :src="meal.strMealThumb" />
  </router-link>
  <h3>{{ meal.strMeal }}</h3>
  <div>
    <a :href="meal.strYoutube" target="_blank">Youtube</a>
    <router-link to="/"> View</router-link>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
