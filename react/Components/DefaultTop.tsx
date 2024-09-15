import React from "react";
import DropDown from "./UI/DropDown";
import { useNavigation } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumb from "./UI/Breadcrumb";

function DefaultTop() {


    return <>
        <div className="d-flex justify-content-between p-2">
            <div>
                <p style={{margin:0}}>CMS</p>
                <div>
                    <Breadcrumb></Breadcrumb>
                </div>
            </div>
            <div>
            </div>
            <div>
                <DropDown title="Username(email)">
                    <li><h6 className="dropdown-header">Account</h6></li>
                    <li><Link className="dropdown-item" to="/account/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/account/settings">Settings</Link></li>
                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                </DropDown>
            </div>
        </div>
    </>
}

export default DefaultTop;