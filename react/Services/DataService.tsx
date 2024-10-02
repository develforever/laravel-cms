import axios from 'axios';
import React, { useReducer } from 'react';

enum ActionType {
    init = "init",
    request = "request",
    success = "success",
    error = "error",
}

export enum Status {
    init = "init",
    request = "request",
    success = "success",
    error = "error",
}



type InitialState = {
    status?: Status,
    url?: string,
    isLoading: boolean,
    result?: any | null
};

type Action = {
    url?: string,
    data?: any,
    method?: string,
    type?: ActionType,
    result?: any
};


const apiClient = axios.create({
    baseURL: '/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer 9|4wWJD3ftyI5nTFhOsCr4vyT9vd4FhUdpJSLDSttN4dfeccf0',
        'X-CSRF-TOKEN': 'fCQ42nSSuOeMlyG6H2yqfqWoCjp1nTPNCJUCsuUt',
    }
});

async function fetchData(url:string, action: Action) {

    const result = await apiClient.request({
        url: url,
        data: action.data,
        method: action.data ? action.method || "POST" : "GET"
    });

    return result;
}

function reducer(state: InitialState, action: Action): InitialState {

    let type: ActionType = action.type || ActionType.init;

    switch (type) {

        case ActionType.success:
            return {
                ...state,
                isLoading: false,
                status: Status.success,
                result: action.result,
                url: action.url
            };
        case ActionType.request:
            return {
                ...state,
                isLoading: true,
                status: Status.request,
                result: action.result,
                url: action.url
            };
        case ActionType.init:
            return {
                ...state,
                status: Status.init,
                result: action.result,
                url: action.url
            };
        case ActionType.error:
            return {
                ...state,
                isLoading: false,
                url: action.url,
                result: action.result,
                status: Status.error,
            };
        default:
            return state;
    }
}

function dispatchMiddleware(url: string, dispatch: React.Dispatch<Action>) {

    console.debug('dispatch middleware');

    return async (action: Action) => {

        let type: ActionType = action.type || ActionType.init;

        switch (type) {
            case ActionType.init:
                dispatch({ ...action, url, type: ActionType.request })
            case ActionType.request:
                try {
                    const result = await fetchData(url, action);
                    dispatch({ ...action, type: ActionType.success, result });
                } catch (e) {
                    console.error('data servce error', e);
                    dispatch({ ...action, type: ActionType.error });
                }
                break;

            default:
                dispatch(action);
        }
    };
}


function useDataService(url: string, ...middlewares: ((action: React.Dispatch<Action>) => (action: Action) => Promise<void>)[]) {

    let params: InitialState = {
        isLoading: false,
        url,
    };
    const [result, dispatch] = useReducer(
        reducer,
        params
    );

    let md = dispatch;
    if (middlewares) {
        middlewares.forEach((e) => {
            md = e(md);
        });
    }

    console.debug('data serive');
    return [result, dispatchMiddleware(url, md)] as const;
}

export default useDataService;