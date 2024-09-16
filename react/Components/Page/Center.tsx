import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "../UI/Card"
import { Link } from "react-router-dom"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    return <Card title="My card 2">
        <p>Text sample</p>
        <Link to={"pageEdit"} key={0} >Page details</Link>
        <div>
            {children}
        </div>
    </Card>

}

export default Center