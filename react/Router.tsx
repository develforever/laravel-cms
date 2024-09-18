import React from "react";
import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import Home from "@app/Pages/Home";
import ErrorPage from "@app/Pages/ErrorPage";
import Pages from "./Pages/Pages";
import PageEdit from "./Pages/PageEdit";
import PageCreate from "./Pages/PageCreate";
import Redirect from "./Components/Redirect";

function router() {

    const router = createBrowserRouter([
        {

            id: "home",
            path: "/",
            element: <Outlet></Outlet>,
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
                    errorElement: <ErrorPage />,
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

    ]);
    return router;
}

export default router;