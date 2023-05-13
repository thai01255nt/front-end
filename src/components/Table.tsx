import { DataFrame } from '../helpers'


export const Table = (props: { data?: DataFrame, hightLightLastRow: boolean }) => {
    if (!props.data) return <></>
    const data = props.data.records
    const splitIndex = props.hightLightLastRow ? -1 : data.length
    const elements = data.slice(0, splitIndex).map((record) => {
        return (
            <tr>
                {record.map((r) => <td>{r.toLocaleString()}</td>)}
            </tr>
        )
    })
    const footer = data.slice(splitIndex).map((record) => {
        return (
            <tr>
                {record.map((r) => <th>{r}</th>)}
            </tr>
        )
    })
        return (
        <div className="table-responsive">
            <table className="table table-bordered table-sm th tbale-sm td" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                    <tr>
                        {props.data.schema.map((s) => <th>{s}</th>)}
                    </tr>
                </thead>
                <tbody>{elements}{footer}</tbody>
            </table>
        </div>

        )
}