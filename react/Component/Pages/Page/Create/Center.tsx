import { LayoutSlotProps } from "@app/Layout"
import React, { useEffect } from "react"
import Card from "../../../UI/Card"
import { Form, Link, useActionData, useFormAction, useLoaderData } from "react-router-dom"
import useDataService from "@app/Services/DataService"

const Center: React.FC<LayoutSlotProps> = ({ }) => {

    const actiondata = useActionData();
    const [state, dispatch] = useDataService();

    useEffect(() => {
        if (actiondata) {
            dispatch({ url: "/page/store", data: actiondata });
        }
    }, [actiondata]);

    return <>
        <Card>
            <Form method="post" className="form">
                <div>
                    <label className="form-label">Title</label>
                    <input name="title" className="form-control" type="text" />
                </div>
                <div>
                    <label className="form-label">Content</label>
                    <textarea name="content" className="form-control" ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Create</button>
            </Form>
        </Card>
    </>

}

export default Center