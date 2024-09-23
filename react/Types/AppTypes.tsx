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

export type AppState = {
    user: null | User,
    modals?: ModalConfig[],
    routes: RouteObject[],
    router: any,
    isAuthenticated: boolean,
    plugin: { [key: string]: Subject<number | string | {}> }

    // functions
    updateUser: Function,
    getUser: Function,
    setRoutes: Function,
    setRouter: Function,
}