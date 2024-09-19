import { RouteObject } from "react-router"

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
    routes: RouteObject[],
    router: any,

    // functions
    updateUser: Function,
    addModal: Function,
    removeModal: Function,
    getUser: Function,
    getModals: Function,
    setRoutes: Function,
    setRouter: Function,
}