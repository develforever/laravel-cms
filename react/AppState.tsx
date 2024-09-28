import { useState } from "react";
import { AppState, PluginsKeys, User } from "@app/Types/AppTypes";
import router, { routes } from "@app/Router";
import { AppStatePluginInterface } from "@app/AppState/Plugin/AppStatePluginInterface";
import ModalsPlugin from "@app/AppState/Plugin/ModalsPlugin";
import { Subject } from "rxjs";
import * as Home from "@app/Pages/Home";
import * as Page from "@app/Pages/Page";


function AppStateInit(): [AppState, React.Dispatch<React.SetStateAction<AppState>>] {

    let panelsRoutes = [
        ...Home.getRoutes(),
        ...Page.getRoutes(),
    ];

    const [routeValues, setRoutes] = routes(panelsRoutes);

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

            let plgName = plgConf.constructor.name as PluginsKeys;
            initialValues.plugin[plgName] = new Subject<number | string | object>()
            plgConf.initialize(initialValues.plugin[plgName], stateSubject);
        });

    return [state, setState];
}

export default AppStateInit