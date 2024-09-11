
import React, { Component, useContext, useEffect } from "react";
import AppContext from "@app/AppContext";
import { Link } from "react-router-dom";

function App() {

    const context = useContext(AppContext);

    return <div className="app">
    <p>{context.user?.username}</p>
    <Link to={`login`}>Login</Link>
    </div>

}


export default App