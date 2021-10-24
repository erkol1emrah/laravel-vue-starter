const routes = [
    {
        path: "/",
        component: () => import("../Pages/First.vue"),
        name: "first",
    },
    {
        path: "/second",
        component: () => import("../Pages/Second.vue"),
        name: "second",
    }
];

export default routes;
