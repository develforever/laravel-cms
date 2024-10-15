import Table from "@app/Component/UI/Table/Table";
import { ApiEndpointNames, ApiPageResource, ApiResponsePageList } from "@app/Enum/Api";
import { LayoutSlotProps } from "@app/Layout"
import useDataService from "@app/Services/DataService";
import React, { useEffect } from "react"


const Center: React.FC<LayoutSlotProps> = ({ }) => {

    const [state, dispatch] = useDataService<ApiResponsePageList>(ApiEndpointNames.PAGE_LIST);

    useEffect(() => {
        dispatch({})
    }, []);


    const data: ApiPageResource[] | undefined = state.result?.data?.data;

    const cols = {
        id: "Id",
        title: "Title",
    };

    return (<div className="overflow-y-hidden">
        <Table cols={cols} rows={data}></Table>
    </div>)

}

export default Center