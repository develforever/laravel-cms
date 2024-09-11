import React, { useContext, useEffect } from "react";
import AppContext from "@app/AppContext";
import Modal from "@app/Modal";
import { ModalConfig } from "./root";


function Modals() {

    const context = useContext(AppContext);

    let key = 1;
    let children = [];

    context.modals.forEach((conf) => {
        conf.key = key++;
        children.push(<Modal  key={conf.key} conf={conf}></Modal>);
    });

    return <>
        {children}
    </>

}

export default Modals