<template>
  <div>
    <input
      type="text"
      v-model="keyword"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div class="d-flex flex-wrap">
    <div>
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
