import Layout, { SlotNames } from "@app/Layout";
import React from "react";
import { useNavigation } from "react-router";

function Home (){

    const navigation = useNavigation();

    return <>   
        <Layout >
           <div>new center</div> 
           <div>cos tam</div>
        </Layout>
    </>
}

export default Home;