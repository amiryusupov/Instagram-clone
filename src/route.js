import { lazy } from "react";
const Main = lazy(()=> import("./pages/HomePage"));

let routes = [
    {
        id: 1,
        path: "/",
        component: <Main/>
    },
]


export default routes;