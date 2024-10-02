import Center from "@app/Component/Pages/Page/Center";
import Layout, { SlotNames } from "@app/Layout";
import React, { Suspense, useContext, useEffect } from "react";
import Edit from "@app/Pages/Page/Edit";
import Create from "@app/Pages/Page/Create";
import Details from "@app/Pages/Page/Details";
import { RouteObject } from "react-router";
import useDataService from "@app/Services/DataService";
import useAppStateInit from "@app/AppState";
import AppContext from "@app/AppContext";


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
                },
                {
                    id: "page_edit",
                    path: ":id/edit",
                    element: <Edit></Edit>,
                    handle: {
                        name: "Page :id"
                    }
                },
                {
                    id: "page_details",
                    path: ":id/view",
                    element: <Details></Details>,
                    handle: {
                        name: "Page :id"
                    }
                },
            ],
        },
        {
            id: "page_create",
            path: "create/page",
            element: <Create></Create>,
            action: async ({ params, request }) => {
                let formData = await request.formData();
                return formData;
            },
            handle: {
                name: "New page"
            }
        },
    ];
};


export type PageResource = {
    autor_user_id: number,
    created_at: string,
    id: number,
    updated_at: string,
    title: string
}

function Page() {

    const context = useContext(AppContext);
    const [state, dispatch] = useDataService('/page/list');

    useEffect(() => {
        dispatch({})
    }, []);


    const data: PageResource[] = state.result?.data?.data;


    return <div className="h-100">
        <Layout className="h-100">
            <Center data-slot={SlotNames.Center} data={data} >
                <button onClick={() => { context.state({ user: { username: "username test" } }) }}>set</button>
            </Center>
        </Layout>
    </div>
}

export default Page;