
import Center from "@app/Component/Pages/Account/Center";
import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import Profile from "@app/Pages/Account/Profile";
import Settings from "@app/Pages/Account/Settings";

export function getRoutes(): RouteObject[] {

    return [
        {
            path: "account",
            handle: {
                name: "Account"
            },
            children: [
                {
                    index: true,
                    element: <Account></Account>,
                },
                {
                    id: "account_profile",
                    path: "profile",
                    element: <Profile></Profile>,
                    handle: {
                        name: "Profile"
                    }
                },
                {
                    id: "account_settings",
                    path: "settings",
                    element: <Settings></Settings>,
                    handle: {
                        name: "Settings"
                    }
                },
            ],
        },
    ];
};


function Account() {

    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} ></Center>
        </Layout>
        <Outlet />
    </>
}

export default Account;