import React, { useState } from "react";
import { createBrowserRouter, Outlet, redirect, RouteObject } from "react-router-dom";
import Home from "@app/Pages/Home";
import ErrorPage from "@app/Pages/ErrorPage";
import Pages from "./Pages/Pages";
import PageEdit from "./Pages/PageEdit";
import PageCreate from "./Pages/PageCreate";
import Redirect from "./Components/Redirect";



function routes(): [RouteObject[], React.Dispatch<React.SetStateAction<RouteObject[]>>] {

    let routeValues: RouteObject[] = [
        {

            id: "home",
            path: "/",
            element: <Outlet></Outlet>,
            errorElement: <ErrorPage />,
            handle: {
                name: "#"
            },
            children: [
                {
                    path: "/",
                    element: <Redirect to="/"></Redirect>
                },
                {
                    id: "panel",
                    path: "/panel",
                    handle: {
                        name: "Panel"
                    },
                    element: <Outlet></Outlet>,
                    children: [
                        {
                            index: true,
                            element: <Home></Home>,
                        },
                        {
                            path: "pages",
                            handle: {
                                name: "Pages"
                            },
                            children: [
                                {
                                    index: true,
                                    element: <Pages></Pages>,
                                },
                                {
                                    id: "page_edit",
                                    path: ":id",
                                    element: <PageEdit></PageEdit>,
                                    handle: {
                                        name: "Page :id"
                                    }
                                },
                                {
                                    id: "page_create",
                                    path: "create",
                                    element: <PageCreate></PageCreate>,
                                    action: async ({ params, request }) => {
                                        let formData = await request.formData();
                                        console.log(params, formData.get("content"));
                                        return { test: 1 };
                                    },
                                    handle: {
                                        name: "New page"
                                    }
                                },
                            ],
                        }
                    ]
                },
            ],
        },

    ];
    const [routes, setRoutes] = useState<RouteObject[]>(routeValues);

    return [routes, setRoutes];
}

export { routes };


function router(routes: RouteObject[]) {

    const routerValue = createBrowserRouter(routes);

    const [router, setRouter] = useState(routerValue);

    return [router, setRouter];
}

export default router;