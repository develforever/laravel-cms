
import Center from "@app/Component/Pages/Home/Center";
import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import { Outlet, RouteObject, useLoaderData } from "react-router-dom";

export function getRoutes(): RouteObject[] {

    return [
        {
            index: true,
            element: <Home></Home>,
        },
    ];
};


function Home() {

    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} >
                new center
            </Center>
        </Layout>
        <Outlet />
    </>
}

export default Home;