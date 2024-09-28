import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import ErrorPage from "@app/Pages/ErrorPage";
import Redirect from "@app/Component/Redirect";


function routes(panelsRoutes?: RouteObject[]): [RouteObject[], React.Dispatch<React.SetStateAction<RouteObject[]>>] {

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
                    children: panelsRoutes ? panelsRoutes : []
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