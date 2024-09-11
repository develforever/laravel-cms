import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "@app/Pages/Home";
import ErrorPage from "@app/Pages/ErrorPage";

function router(){

    const router = createHashRouter([
        {
            path: "/",
            element: <Home></Home>,
            errorElement: <ErrorPage />,
        },
    ]);
    return router;
}

export default router;