<template>
  <div>
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>

    <div class="d-flex flex-wrap">
      <div>
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").join(" ");
const meals = computed(() => store.state.mealsByLetter);
const letter = ref("");

function searchMealsByLetters() {
  store.dispatch("searchMealsByLetter", (letter.value = route.params.letter));
}

onMounted(() => {
  searchMealsByLetters();
});
watch(route, () => {
  searchMealsByLetters();
});
</script>
