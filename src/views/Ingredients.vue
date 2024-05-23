<template>
  <div class="container">
    Search By Ingredients
    <input type="text" v-model="keyword" placeholder="Search by Ingredients" />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of filteredIngredients"
      :key="ingredient.idIngredient"
      class="d-block rounded p-2 bg-white border mb-2 shadow"
    >
      <h3>{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

const ingredientList = computed(() => store.state.ingredientList);

const ingredients = ref([]);
const keyword = ref("");

const filteredIngredients = computed(() => {
  if (!ingredients.value) return [];
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  store.dispatch("ingredientList");
  ingredients.value = ingredientList.value;
});
</script>
