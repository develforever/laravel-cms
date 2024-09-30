import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "@app/Component/UI/Card"
import { Link } from "react-router-dom"
import { PageResource } from "@app/Pages/Page"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    let page: PageResource = {
        id: 1,
        title: "test"
    } as PageResource;

    return <Card title="Edit page">
        <p>{page.title}</p>
    </Card>

}

export default Center