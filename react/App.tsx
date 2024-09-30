
import React, { Suspense, useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AppContext from "./AppContext";
import useDataService from "./Services/DataService";

function App() {

    const context = useContext(AppContext);
    const router = context.router;

    const [state, dispatch] = useDataService();

    useEffect(() => {
        dispatch({ url: '/user' })
    }, []);

    

    return <div className="app w-100 h-100 q">
        <Suspense fallback={<div>loading ....</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </div>

}


export default App