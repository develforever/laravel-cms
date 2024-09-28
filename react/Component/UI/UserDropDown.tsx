import React, { useContext, useState } from "react";
import Button from "./Button";
import AppContext from "@app/AppContext";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";


function Comp(props: { children?: any }) {

    const { user } = useContext(AppContext);
    if (user) {
        return <DropDown title={user?.username}>
            <li><h6 className="dropdown-header">Account</h6></li>
            <li><Link className="dropdown-item" to="/account/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/account/settings">Settings</Link></li>
            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
        </DropDown>
    } else if (props.children) {
        return props.children;
    }else{
        return <></>
    }
}

const UserDropDown: React.FC<{ children?: any }> = ({ children }) => {

    return <Comp>{children}</Comp>;
}

export default UserDropDown;