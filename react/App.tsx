
import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import AppContext from "./AppContext";
import RouteGuard from "./Components/Route/RouteGuard";


function App() {

    const context = useContext(AppContext);
    const router = context.router;
    
    return <div className="app w-100 h-100">
        <RouteGuard>
            <RouterProvider router={router} />
        </RouteGuard>
    </div>

}


export default App