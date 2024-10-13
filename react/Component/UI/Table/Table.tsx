
import React from "react"

type TableProps = {
    rows?: any[],
};

const Table: React.FC<TableProps> = ({ rows }) => {

    const firstRow = rows && rows.length > 0 ? rows[0] : {};
    const tableHeader = Object.keys(firstRow).map((h, i) => {
        return <th key={i}>{h}</th>
    });
    const tableRows = rows?.map((r, i) => {

        const cells = Object.keys(r)
            .map((c, i) => {
                return <td key={i}>{r[c]}</td>
            });

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