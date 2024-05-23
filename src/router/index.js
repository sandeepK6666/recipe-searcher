
import DefaultLayout from "@/components/DefaultLayout.vue";
import GuestLayout from "@/components/GuestLayout.vue";
import HomeComp from "@/views/Home-comp.vue";
import MealDetails from "@/views/MealDetails.vue";
import MealsByIngredients from "@/views/MealsByIngredients.vue";
import MealsByLetter from "@/views/MealsByLetter.vue";
import MealsByName from "@/views/MealsByName.vue";
import Ingredients from "@/views/Ingredients.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeComp
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/letter/:letter?",
                name: "byLetter",
                component: MealsByLetter
            },
            {
                path:"/ingredients",
                name:"ingredients",
                component: Ingredients,
            },
            {
                path: "/by-ingredient/:ingredient",
                name: "byIngredient",
                component: MealsByIngredients
            },
            {
                path:'/meal/:id',
                name:'mealDetails',
                component:MealDetails
            }
        ]
    },
    {
        path:'/auth',
        component: GuestLayout
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;