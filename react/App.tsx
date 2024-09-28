
import React, { Suspense, useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AppContext from "./AppContext";
import RouteGuard from "./Component/Route/RouteGuard";
import useDataService from "./Services/DataService";

function App() {

    const context = useContext(AppContext);
    const router = context.router;

    const [state, dispatch] = useDataService((next) => {

        return async action => {
            console.log('app middleware', action);
            next(action);
        }
    });

    useEffect(() => {
        dispatch({ url: '/user' })
    }, []);

    let Display = null;

    if (state.status === "init") {
        Display = <div>Loading...</div>;
    } else if (state.status === "error") {
        Display = <div>Error</div>;
    } else if (state.status === "success") {
        Display = JSON.stringify(state.result.data);
        //context.updateUser(state.result.data);
    }

    function test(){
        context.updateUser(state.result?.data)
    }


    return <div className="app w-100 h-100 q">
        <RouteGuard>
            <div>display: {Display}</div>
            <button onClick={test}>test set user</button>
            <Suspense fallback={<div>loading ....</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </RouteGuard>
    </div>

}


export default App