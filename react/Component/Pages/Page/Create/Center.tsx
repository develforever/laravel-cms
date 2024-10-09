import { LayoutSlotProps } from "@app/Layout"
import React, { useEffect } from "react"
import Card from "../../../UI/Card"
import { Form, Link, useActionData, useFormAction, useLoaderData } from "react-router-dom"
import useDataService, { Status } from "@app/Services/DataService"
import useRedirect from "@app/hooks/useRedirect"
import { RouteNames } from "@app/Enum/Route"
import { ApiEndpointNames } from "@app/Enum/Api"
import useNavigate from "@app/hooks/useNavigate"

const Center: React.FC<LayoutSlotProps> = ({ }) => {

    console.debug("page create render");
    const actiondata = useActionData();
    const [state, dispatch] = useDataService(ApiEndpointNames.PAGE_STORE);
    const redirect = useNavigate(RouteNames.PANEL_PAGES);

    useEffect(() => {
        if (actiondata) {
            dispatch({ data: actiondata });
        }
    }, [actiondata]);

    useEffect(() => {
        if (state.status === Status.success) {
            redirect();
        }
    }, [state.status]);

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