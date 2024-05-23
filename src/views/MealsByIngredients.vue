<template>
  <div class="d-flex flex-wrap">
    <div>
      <MealItem v-for="meal of meals" :key="meal?.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals?.length">There is no data</div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
let ingredient = ref("");

console.log("meals", meals.value);
function searchMealsByIngredient() {
  store.dispatch("searchMealsByIngredient", (ingredient.value = route.params.ingredient));
}

onMounted(() => {
  searchMealsByIngredient();
});
</script>
