"use strict";

import React, { useContext, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
    useRouteError,
} from "react-router-dom";

// app
import App from "@app/App";
import Modals from "@app/Modals";
import AppContext from "@app/AppContext";
import * as bootstrapcss from "./css/bootstrap.css";
import * as css from "./css/app.css";

bootstrapcss;
css;

export type User = {
    username: string
}
export type ModalConfig = {
    // todo maybe uuid type
    id: string,
    key: any
}

export type AppState = {
    user: null | User,
    modals: ModalConfig[],

    // functions
    updateUser: Function,
    addModal: Function,
    removeModal: Function,
    getUser: Function,
    getModals: Function
}

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

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }

export default function () {

    const root = createRoot(document.getElementById('root'));

    const router = createHashRouter([
        {
            path: "/",
            element: <Root></Root>,
            errorElement: <ErrorPage />,
        },
    ]);

    root.render(<React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>);
}