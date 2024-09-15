import AppContext from "@app/AppContext";
import Center from "@app/Components/Home/Center";
import Layout, { SlotNames } from "@app/Layout";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "react-router";

function Home() {
    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} >new center</Center>
        </Layout>
    </>
}

export default Home;