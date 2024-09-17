import AppContext from "@app/AppContext";
import Center from "@app/Components/PageCreate/Center";
import Layout, { SlotNames } from "@app/Layout";
import React, { useContext, useEffect, useMemo } from "react";
import { useActionData } from "react-router";

function PageCreate() {

    const context = useContext(AppContext);
    let actionData = useActionData();

    console.log(actionData);
    
    return <>
        <Layout>
            <Center data-slot={SlotNames.Center} ></Center>
        </Layout>
    </>
}

export default PageCreate;