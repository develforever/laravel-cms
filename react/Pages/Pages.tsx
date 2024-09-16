import AppContext from "@app/AppContext";
import Center from "@app/Components/Pages/Center";
import Layout, { SlotNames } from "@app/Layout";
import React, { useContext, useEffect, useMemo } from "react";

function Pages() {

    const context = useContext(AppContext);
    
    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} ></Center>
        </Layout>
    </>
}

export default Pages;