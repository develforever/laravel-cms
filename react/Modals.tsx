import React from "react";
import AppContext from "@app/AppContext";
import Modal from "@app/Modal";


class Modals extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {  };
    }


    render() {

        let key = 1;
        let children = [];

        this.context.modals.forEach((conf)=>{
            conf.key = key++;
            children.push(React.createElement(Modal, conf));
        });

        return React.createElement('div', null, children);
    }
}

export default Modals