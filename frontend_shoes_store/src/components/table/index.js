import { useEffect, useState } from "react";
import API from "../../infra/axios"

const Table = () => {
    // eslint-disable-next-line
    const [values, setValues] = useState()

    const getData = async () => {
        const response = await API.getData("/api/shoes/")
        setValues(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteItem = (event) => {
        const itemId = event.target.id
        API.removeData(`/api/shoes/${itemId}/`)
        window.location.reload(true)
    }

    return (
        <>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>model</th>
                        <th>size</th>
                        <th>gender</th>
                        <th>color</th>
                        <th>brand</th>
                        <th>type</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>actions</th>
                    </tr>
                </thead>
                {!values ?
                    <>
                    </>
                    : values["results"].map((item, i) => (
                        <tbody>
                            <tr id={item.id} key={item.id} name={item.id}>
                                <td>{item.model}</td>
                                <td>{item.size}</td>
                                <td>{item.gender}</td>
                                <td>{item.color}</td>
                                <td>{item.brand}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td><button id={item.id} className="button is-small is-danger" onClick={deleteItem}>Remover</button></td>
                            </tr>
                        </tbody>
                    ))}
            </table>
        </>
    )
}

export default Table;