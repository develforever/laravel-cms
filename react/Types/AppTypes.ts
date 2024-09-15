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
    breadcrumb: { name: string, link: string }[]

    // functions
    updateUser: Function,
    addModal: Function,
    removeModal: Function,
    getUser: Function,
    getModals: Function
    addBread: (name:string, link:string)=>void
}