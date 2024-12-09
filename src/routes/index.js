import MainView from "../views/MainView";
import Recents from "../views/Recents";

let routes = [
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
