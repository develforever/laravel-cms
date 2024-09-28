
import Center from "@app/Component/Home/Center";
import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import { Outlet, RouteObject, useLoaderData } from "react-router-dom";

export function getRoutes():RouteObject[] {

    return [
        {
            index: true,
            element: <Home></Home>,
            loader: async ({ request, params }) => {

                console.log('panel data');
                return [1, 2, 3];
            },
        },
    ];
};


function Home() {

    let data = useLoaderData() as any[];

    console.log(data);

    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} >new center</Center>
        </Layout>
        <Outlet />
    </>
}

export default Home;