import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppState, ModalConfig, User } from "./Types/AppTypes";

function AppStateInit():[AppState, React.Dispatch<React.SetStateAction<AppState>>]{


    const [state, setState] =  useState<AppState>({
    
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

    return [state, setState];
}

export default AppStateInit