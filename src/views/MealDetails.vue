<template>
  <div>
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div>Category: {{ meal.strCategory }}</div>
    <div>Area: {{ meal.strArea }}</div>
    <div>Tags: {{ meal.strTags }}</div>
  </div>
  <div>
    <ul>
      <template v-for="(ingr, index) of new Array(20)">
        <li v-if="meal[`strIngredient${index + 1}`]" :key="index">
          {{ meal[`strIngredient${index + 1}`] }}
        </li>
      </template>
    </ul>
  </div>
  <CustomButton buttonLabel="Youtube" link="https://youtube.com" />
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CustomButton from "../components/CustomButton.vue";
import store from "../store";

const singleIngredient = computed(() => store.state.singleIngredient);
const route = useRoute();
const meal = ref({});

onMounted(() => {
  store.dispatch("singleIngredient", route.params.id);
  meal.value = singleIngredient.value;
});
</script>
