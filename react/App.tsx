
import React, { useContext } from "react";
import router from "./Router";
import { RouterProvider } from "react-router-dom";
import AppContext from "./AppContext";


function App() {

    const context = useContext(AppContext);
    const routes = context.router;

    return <div className="app w-100 h-100">
        <RouterProvider router={routes} />
    </div>

}


export default App