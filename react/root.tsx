"use strict";

import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';

// app
import App from "@app/App";
import Modals from "@app/Modals";
import AppContext from "@app/AppContext";
import AppStateInit from "@app/AppState";
import { ModalProps } from "@app/Modal";
import { ModalPluginEvent, ModalsPluginEvent } from "@app/AppState/Plugin/ModalsPlugin";


function Root() {

    const [state, setState] = AppStateInit();

    useEffect(() => {


        // setTimeout(state.updateUser, 1000, {
        //     username: "admin 2"
        // });

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

        state.plugin.ModalsPlugin.next({
            event: ModalsPluginEvent.ADD,
            data: {
                title: "Modal my title",
                onClose: () => {
                    console.log("modal close listener");
                },
                onOk: () => {
                    console.log("modal ok listener");
                },
                onCancel: () => {
                    console.log("modal cancel listener");
                }
            } as ModalProps
        } as ModalPluginEvent);
        
    }, []);

    return <>
        <AppContext.Provider value={state}>
            <App key="app"></App>
            <Modals key="modal"></Modals>
        </AppContext.Provider>
    </>

}


export default function () {

    // @ts-ignore
    const node = document.querySelector('#root.has-app')
    if (node) {
        const root = createRoot(node);
        root.render(<React.StrictMode>
            <Root></Root>
        </React.StrictMode>);
    }
}