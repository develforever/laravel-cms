import AppContext from "@app/AppContext";
import Center from "@app/Components/Home/Center";
import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
    
    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} >new center</Center>
        </Layout>
        <Outlet />
    </>
}

export default Home;