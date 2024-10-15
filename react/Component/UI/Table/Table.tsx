
import React, { useCallback } from "react"

type TableProps = {
    rows?: any[],
    cols?: { [key: string]: string },
    showActions?: boolean,
};

const Table: React.FC<TableProps> = ({ rows, cols = undefined, showActions = true }) => {

    if (!rows) {
        return <></>
    }

    const onClickView = useCallback((e:MouseEvent, r:any) => {
        console.log(r);
    }, []);


    const firstRow = rows && rows.length > 0 ? rows[0] : {};
    const columnNames = cols ? Object.keys(cols) : Object.keys(firstRow.data);
    const columnLabels = cols ? cols : {};

    const tableHeader = columnNames.map((h, i) => {
        return <th key={i}>{columnLabels ? columnLabels[h] : h}</th>
    });

    if (showActions) {
        tableHeader.push(<th key={-1}>Actions</th>);
    }

    const tableRows = rows?.map((r, i) => {
        const cells = columnNames
            .map((c, i) => {
                return <td key={i}>{r.data[c]}</td>
            });

        if (showActions) {
            cells.push(<td key={-1}>
                <a className="btn btn-primary" onClick={e=>onClickView(e, r)}>View</a>
            </td>);
        }

        return <tr key={i}>
            {cells}
        </tr>
    });

    return (<table className="table table-striped">
        <thead><tr>{tableHeader}</tr></thead>
        <tbody>{tableRows}</tbody>
        <tfoot></tfoot>
    </table>)

}

export default Table