
import React, { Suspense, useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AppContext from "@app/AppContext";
import useDataService, { Status } from "@app/Services/DataService";

function App() {

    const context = useContext(AppContext);
    const router = context.router;

    const [state, dispatch] = useDataService('/user');

    useEffect(() => {
        dispatch({})
    }, []);

    if (state.status === Status.success) {
        console.log(state.result.data);
        //context.dispatch({user:state.result.data});
    }


    return <div className="app w-100 h-100 q">
        <RouterProvider router={router} />
    </div>

}


export default App