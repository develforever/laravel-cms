import { RouteObject } from "react-router"
import { Subject } from "rxjs"

export type User = {
    username: string
}
export type ModalConfig = {
    // todo maybe uuid type
    id: string,
    key: any
}

export type PluginsKeys = "ModalsPlugin";

export type AppState = {
    title?: string,
    user: null | User,
    modals?: ModalConfig[],
    routes: RouteObject[],
    router: any,
    isAuthenticated: () => boolean,
    plugin: {
        [key in PluginsKeys]?: Subject<number | string | {}>
    },
    dispatch:Function,
}