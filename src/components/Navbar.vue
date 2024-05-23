<template>
  <header>
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <ul>
      <router-link :to="{ name: 'byName' }"> Seach Meals </router-link>
      <router-link :to="{ name: 'byLetter' }"> Meals BY Letter </router-link>
      <router-link :to="{ name: 'ingredients' }"> Meals By Ingredients </router-link>
    </ul>
  </header>
</template>
