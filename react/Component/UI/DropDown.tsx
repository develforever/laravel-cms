import React, { useState } from "react";
import Button from "./Button";


const DropDown: React.FC<{ title: string, children:any }> = ({ title, children }) => {

    const [state, setState] = useState({
        isOpen: false,
    });

    function onClick() {

        setState((state) => {
            return { ...state, isOpen: !state.isOpen }
        });
    }


    return <div className="btn-group dropstart">        
        <Button title={title} className={`btn-secondary dropdown-toggle${state.isOpen ? ' show' : ''}`} onClick={onClick}></Button>

        <ul className={`dropdown-menu${state.isOpen ? ' show' : ''}`} style={{top: '100%'}}>
            {children}
        </ul>
    </div>
}

export default DropDown;