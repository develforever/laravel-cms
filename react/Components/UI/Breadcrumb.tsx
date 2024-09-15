import AppContext from "@app/AppContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


const Breadcrumb: React.FC<{}> = ({ }) => {

    const context = useContext(AppContext);

    const [state, setState] = useState({

    });


    {/* @ts-ignore */ }
    return <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            {/* <li className="breadcrumb-item active" aria-current="page">Library</li> */}
        </ol>
    </nav>
}

export default Breadcrumb;