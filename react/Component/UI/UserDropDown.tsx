import React, { useContext, useState } from "react";
import Button from "./Button";
import AppContext from "@app/AppContext";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import useRedirect from "@app/hooks/useRedirect";
import { RouteNames } from "@app/Enum/Route";


function Comp(props: { children?: any }) {

    const { user } = useContext(AppContext);
    const redirect = useRedirect(RouteNames.LOGOUT);

    if (user) {
        return <DropDown title={user?.username}>
            <li><h6 className="dropdown-header">Account</h6></li>
            <li><Link className="dropdown-item" to="/account/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/account/settings">Settings</Link></li>
            <li><a href="#" className="dropdown-item" onClick={()=> globalThis.location.assign('/logout')}>Logout</a></li>
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