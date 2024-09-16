import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "../UI/Card"
import { Link } from "react-router-dom"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    return <div>
        <Link to={"1"} key={0} >Page 1</Link>
        <div>
            {children}
        </div>
    </div>

}

export default Center