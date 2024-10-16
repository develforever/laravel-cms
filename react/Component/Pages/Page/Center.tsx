import Table from "@app/Component/UI/Table/Table";
import { ApiEndpointNames, ApiPageResource, ApiResponsePageList } from "@app/Enum/Api";
import { RouteNames } from "@app/Enum/Route";
import useNavigate from "@app/hooks/useNavigate";
import { LayoutSlotProps } from "@app/Layout"
import useDataService from "@app/Services/DataService";
import React, { useEffect } from "react"


const Center: React.FC<LayoutSlotProps> = ({ }) => {

    const [state, dispatch] = useDataService<ApiResponsePageList>(ApiEndpointNames.PAGE_LIST);
    const navigate = useNavigate(RouteNames.PANEL_PAGES_VIEW);

    useEffect(() => {
        dispatch({})
    }, []);


    const data: ApiPageResource[] | undefined = state.result?.data?.data;

    const cols = {
        id: "Id",
        title: "Title",
    };

    return (<div className="overflow-y-hidden">
        <Table
            onView={(row) => {
                navigate({ id: row.data.id }, { state: { row } });
            }}
            cols={cols}
            rows={data}></Table>
    </div>)

}

export default Center