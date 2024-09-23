import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppState, ModalConfig, User } from "./Types/AppTypes";
import router, { routes } from "./Router";
import { AppStatePluginInterface } from "@app/AppState/Plugin/AppStatePluginInterface";
import ModalsPlugin from "./AppState/Plugin/ModalsPlugin";
import { Subject } from "rxjs";



function AppStateInit(): [AppState, React.Dispatch<React.SetStateAction<AppState>>] {

    const [routeValues, setRoutes] = routes();

    const [routerObject, setRouter] = router(routeValues);

    let initialValues: AppState = {
        user: null,
        routes: routeValues,
        router: routerObject,
        isAuthenticated: false,
        // functions 
        setRoutes: setRoutes,
        setRouter: setRouter as Function,
        updateUser(user: User) {
            setState((state) => {
                return { ...state, user: user }
            });
        },
        getUser() {
            return state.user;
        },
        modals: [],
        addModal: (modalConfig: ModalConfig) => {
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
        getModals() {
            return state.modals;
        },
        plugin: {
        },
    } as AppState;

    const initValuesSubject = new Subject<{}>();
    initValuesSubject.subscribe((v) => {
        initialValues = { ...initialValues, ...v };
    });

    let statePlugins: AppStatePluginInterface[] = [
        new ModalsPlugin(),
    ];

    const [state, setState] = useState<AppState>(initialValues);

    const stateSubject = new Subject<{}>();
    stateSubject.subscribe((v) => {
        setState({ ...state, ...v });
    });

    statePlugins
        .forEach((plgConf) => {
            initialValues.plugin[plgConf.constructor.name] = new Subject<number | string | object>()
            plgConf.initialize(initialValues.plugin[plgConf.constructor.name], stateSubject);
        });

    return [state, setState];
}

export default AppStateInit