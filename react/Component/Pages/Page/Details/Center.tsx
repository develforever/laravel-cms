import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "@app/Component/UI/Card"
import { generatePath, Link } from "react-router-dom"
import { PageResource } from "@app/Pages/Page"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    let page: PageResource = {
        id: 1,
        title: "test"
    } as PageResource;

    return <Card title="Details">
        <p>{page.title}</p>
        <Link to={generatePath(`/panel/pages/:id/edit`, { id: `${page.id}` })} key={0} >Edit</Link>
    </Card>

}

export default Center