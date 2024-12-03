import AuthView from "../views/auth/AuthView";
import MainView from "../views/MainView";
import Recents from "../views/Recents";

let routes = [
    {
        path: "/auth",
        component: AuthView,
        layout: "auth",
    },
    {
        path: "/",
        component: MainView,
        layout: "main",
    },
    {
        path: "/recents",
        component: Recents,
        layout: "main",
    },
];
export default routes;
