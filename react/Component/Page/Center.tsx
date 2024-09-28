import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import { Link, useLoaderData } from "react-router-dom"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    let data = useLoaderData() as any[];

    let items = data?.map((e, i)=>{
        return <Link to={`${e}`} key={i} >Page 1</Link>
    });

    return <div>
        <div>
            {items}
        </div>
        <div>
            {children}
        </div>
    </div>

}

export default Center