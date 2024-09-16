import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@app/Pages/Home";
import ErrorPage from "@app/Pages/ErrorPage";
import Pages from "./Pages/Pages";
import Page from "./Pages/Page";

function router() {

    const router = createBrowserRouter([
        {
            id: "home",
            path: "/",
            errorElement: <ErrorPage />,
            handle: {
                name: "Home"
            },
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
                            index:true,
                            element: <Pages></Pages>,
                        },
                        {
                            id:"pageEdit",
                            path: ":id",
                            element: <Page></Page>,
                            handle: {
                                name: "Page :id"
                            }
                        },
                    ],
                }
            ],
        },

    ]);
    return router;
}

export default router;