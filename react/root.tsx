"use strict";

import React, { useContext, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

// app
import App from "@app/App";
import Modals from "@app/Modals";
import AppContext from "@app/AppContext";
import * as bootstrapcss from "@app/css/bootstrap.css";
import * as css from "@app/css/app.css";
import { AppState, ModalConfig, User } from "./Types/AppTypes";

bootstrapcss;
css;


function Root() {

    const [state, setState] = useState<AppState>({
        modals: [],
        user: null,
        updateUser(user: User) {
            setState((state) => {
                return { ...state, user: user }
            });
        },
        addModal(modalConfig: ModalConfig) {
            let tmp = state.modals ? [...state.modals] : [];
            modalConfig.id = uuidv4();
            tmp.push(modalConfig);
            setState((state) => {
                return { ...state, modals: tmp }
            });
            console.log('add modal', modalConfig, { ...state });
        },
        removeModal(id: string) {

            let tmp: ModalConfig[] = state.modals ? [...state.modals] : [];

            let index = tmp.findIndex((e) => e.id == id);
            if (index !== -1) {
                tmp.splice(index, 1);
            }

            setState((state) => {
                return { ...state, modals: tmp }
            });
        },
        getUser() {
            return state.user;
        },
        getModals() {
            return state.modals;
        }
    });

    useEffect(() => {

        // state.updateUser({
        //     username: "admin 2"
        // });

        // state.addModal({
        //     title: "Modal 1"
        // });

    }, []);

    return <>
        <AppContext.Provider value={state}>
            <App key="app"></App>
            <Modals key="modal"></Modals>
        </AppContext.Provider>
    </>

}



const root = createRoot(document.getElementById('root'));

export default function () {

    root.render(<React.StrictMode>
        <Root></Root>
    </React.StrictMode>);
}