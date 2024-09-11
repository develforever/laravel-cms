
import React, { Component, useContext, useEffect } from "react";
import AppContext from "@app/AppContext";

function App() {

    const context = useContext(AppContext);

    return <div className="app">
    <p>{context.user?.username}</p>
    </div>

}


export default App