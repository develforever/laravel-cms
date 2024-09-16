"use strict";

import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';

// app
import App from "@app/App";
import Modals from "@app/Modals";
import AppContext from "@app/AppContext";
import AppStateInit from "./AppState";


function Root() {

    const [state, setState] = AppStateInit();

    useEffect(() => {

        // state.updateUser({
        //     username: "admin 2"
        // });

        // state.addModal({
        //     title: "Modal my title",
        //     onClose: ()=>{
        //         console.log("modal close listener");
        //     },
        //     onOk: ()=>{
        //         console.log("modal ok listener");
        //     },
        //     onCancel: ()=>{
        //         console.log("modal cancel listener");
        //     }
        // } as ModalProps);

    }, []);

    return <>
        <AppContext.Provider value={state}>
            <App key="app"></App>
            <Modals key="modal"></Modals>
        </AppContext.Provider>
    </>

}


// @ts-ignore
const root = createRoot(document.getElementById('root'));

export default function () {

    root.render(<React.StrictMode>
        <Root></Root>
    </React.StrictMode>);
}