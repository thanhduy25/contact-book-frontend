import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";


createApp(App).use(router).mount("#app");


const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
        }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;