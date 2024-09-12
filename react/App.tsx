
import React from "react";
import router from "./Router";
import { RouterProvider } from "react-router-dom";


function App() {

    return <div className="app w-100 h-100">
        <RouterProvider router={router()} />
    </div>

}


export default App