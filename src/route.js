import { lazy } from "react";
const Main = lazy(()=> import("./components/Home/Main"));

let routes = [
    {
        id: 1,
        path: "/",
        component: <Main/>
    },
]


export default routes;