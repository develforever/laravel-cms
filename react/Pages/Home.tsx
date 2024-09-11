import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import { useNavigation } from "react-router";

function Home (){

    const navigation = useNavigation();

    return <>   
        <Layout >
           <div data-slot={SlotNames.Top}>new top</div> 
           <div data-slot={SlotNames.Bottom}>new bottom</div> 
           <div data-slot={SlotNames.Left}>new left</div> 
           <div data-slot={SlotNames.Center}>new center</div> 
           <div data-slot={SlotNames.Right}>new right</div> 
        </Layout>
    </>
}

export default Home;