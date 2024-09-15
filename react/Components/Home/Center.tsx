import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "../UI/Card"

const Center: React.FC<LayoutSlotProps> = ({ }) => {
    return <Card title="My card 1">
        <p>Text sample</p>
    </Card>

}

export default Center