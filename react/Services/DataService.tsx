import axios from 'axios';
import { Reducer, useReducer, useState } from 'react';
import { delay, Observable } from 'rxjs';


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

async function fetchData(params: any) {

    const result = await apiClient.request(params);

    return result;
}

function reducer(state: InitialState, action: Action) {

    let type: string = action.type || "request";
    console.log('reducer type', type);
    switch (type) {

        case "success":
            return {
                ...state,
                status: "success",
                result: action.result,
                url: action.url
            };
        case "request":
            return {
                ...state,
                status: "request",
                result: action.result,
                url: action.url
            };
        case "init":
            return {
                ...state,
                status: "init",
                result: action.result,
                url: action.url
            };
        case "error":
            return {
                ...state,
                url: action.url,
                status: "error",
            };
        default:
            return state;
    }
}

function dispatchMiddleware(dispatch) {
    return async action => {
        let type: string = action.type || "init";
        console.log('dispatchMiddleware type', type);
        switch (type) {
            case "init":


                dispatch({ ...action, status: "request", type: "request" })

            case "request":
                console.log("dispatchMiddleware request action", action);
                try {
                    const result = await fetchData(action.url);
                    dispatch({ ...action, status: "success", type: "success", result });
                } catch (e) {
                    dispatch({ ...action, type: "error" });
                }
                break;

            default:
                return dispatch(action);
        }
    };
}

type InitialState = {
    status: string | null,
    url: string | null,
    result: any | null
}

type Action = {
    url: string,
    type?: string,
    result?: any
};

function useDataService(...middlewares) {

    let params: InitialState = {
        status: "init",
        url: null,
        result: null
    };
    const [result, dispatch] = useReducer<Reducer<InitialState, Action>>(
        reducer,
        params
    );

    let md = dispatch;

    if (middlewares) {
        middlewares.forEach((e) => {
            md = e(md);
        });
    }

    return [result, dispatchMiddleware(md)];
}

export default useDataService;