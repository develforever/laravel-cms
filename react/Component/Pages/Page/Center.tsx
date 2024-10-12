import ListItem from "@app/Component/Pages/Page/ListItem";
import { LayoutSlotProps } from "@app/Layout"
import { PageResource } from "@app/Pages/Page";
import React from "react"
import { Link } from "react-router-dom"

type CenterProps = {
    data: any
} & LayoutSlotProps;


const Center: React.FC<LayoutSlotProps & CenterProps> = ({ children, data }) => {

    console.log("page center render");
    let items = data?.map((e: PageResource, i: number) => {
        return <ListItem key={i} page={e}></ListItem>
    });

    return <div className="overflow-y-hidden">
        <div>
            {items}
        </div>
    </div>

}

export default Center