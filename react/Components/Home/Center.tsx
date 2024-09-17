import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "../UI/Card"
import { Link } from "react-router-dom"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    return <Card title="Pages">
        <Link to={"pages"} key={0} >Go to pages view</Link>
        or 
        <Link to={"pages/create"} key={1} >Create new page</Link>
        <div>
            {children}
        </div>
    </Card>

}

export default Center