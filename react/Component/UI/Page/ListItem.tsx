

import React from "react";
import Card from "@app/Component/UI/Card";
import { PageResource } from "@app/Pages/Page";
import { Link } from "react-router-dom";


const ListItem: React.FC<{ page: PageResource }> = ({ page }) => {

    return <>
        <Card>
            <h4>{page.title}</h4>
            <sub>{page.created_at}</sub>
            <sub>{page.updated_at}</sub>
            <div>
                <Link to={`${page.id}/view`} >Details</Link>
            </div>
        </Card>
    </>
}

export default ListItem;