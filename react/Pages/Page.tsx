import Center from "@app/Component/Page/Center";
import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import Edit from "./Page/Edit";
import Create from "./Page/Create";
import { RouteObject } from "react-router";


export function getRoutes(): RouteObject[] {

    return [
        {
            path: "pages",
            handle: {
                name: "Pages"
            },
            children: [
                {
                    index: true,
                    element: <Page></Page>,
                    loader: async ({ request, params }) => {


                        return [1, 2, 3];
                    },
                },
                {
                    id: "page_edit",
                    path: ":id",
                    element: <Edit></Edit>,
                    handle: {
                        name: "Page :id"
                    }
                },
                {
                    id: "page_create",
                    path: "create",
                    element: <Create></Create>,
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
    ];
};


function Page() {

    

    return <div className="h-100">
        <Layout className="h-100">
            <Center data-slot={SlotNames.Center} ></Center>
        </Layout>
    </div>
}

export default Page;