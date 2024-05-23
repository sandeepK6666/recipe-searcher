import axiosClient from "@/axiosClient";
import api from "../services/api"

export function searchMeals({ commit }, keyword) {
    api.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals);
        })
        .catch(error => {
            console.error("Error searching meals:", error);
        });
}

export function searchMealsByLetter({commit}, letter){
    api.get(`search.php?f=${letter}`)
    .then(({data}) =>{
        commit('setMealsByLetter', data.meals)
    })
    .catch(error => {
        console.error("Error",error)
    })
}

export function searchMealsByIngredient({commit}, ingredient){
    api.get(`filter.php?i=${ingredient}`)
    .then(({data}) =>{
        commit('setMealsByIngredient', data.meals)
    })
    .catch(error => {
        console.error('Error', error);
    })
}

export function ingredientList({commit}){
    api.get("/list.php?i=list")
    .then(({data}) =>{
        commit('setIngredientList', data.meals)
    })
    .catch(error => {
        console.error('Error', error);
    })
}

export function singleIngredient({commit},id) {
    api.get(`lookup.php?i=${id}`)
    .then(({ data }) => {
        commit('setSingleIngredient', data.meals[0])
      })
      .catch(error => {
        console.error('Error', error);
    });
}