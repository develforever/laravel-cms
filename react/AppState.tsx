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
        plugin: {
        },
    } as AppState;

    const initValuesSubject = new Subject<{}>();
    initValuesSubject.subscribe((v) => {
        initialValues = { ...initialValues, ...v };
    });

    let statePlugins: AppStatePluginInterface[] = [
        new ModalsPlugin(initValuesSubject),
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