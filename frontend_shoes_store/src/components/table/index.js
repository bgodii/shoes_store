import { useEffect, useState } from "react";
import API from "../../infra/axios"
import Modal from "../modal";

const Table = () => {
    // eslint-disable-next-line
    const [values, setValues] = useState()
    const [modal, setModal] = useState(false)

    const getData = async () => {
        const response = await API.getData("/api/shoes/")
        setValues(response.data)
    }

    useEffect(() => {
        getData()
    }, [values])

    const deleteItem = (item) => {
        const itemId = item.id
        API.removeData(`/api/shoes/${itemId}/`)
        window.location.reload(true)
    }

    const openModal = () => setModal(true)
    const closeModal = () => {
        setModal(false)
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
                            <tr>
                                <td>{item.model}</td>
                                <td>{item.size}</td>
                                <td>{item.gender}</td>
                                <td>{item.color}</td>
                                <td>{item.brand}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button className="button is-small is-warning" onClick={openModal} style={{ marginRight: 10 }}>Editar</button>
                                    <button className="button is-small is-danger" onClick={() => deleteItem(item)}>Remover</button>
                                    <Modal show={modal} closeModal={closeModal} data={item} />
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </table>
        </>
    )
}

export default Table;