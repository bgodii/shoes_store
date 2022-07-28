import API from "../../infra/axios"
import { useState } from "react";


const Modal = ({ show, closeModal, data }) => {
    const [values, setValues] = useState(data)

    const handlechange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value.toLowerCase() })
    }

    const updateData = () => {
        API.updateData(values, `/api/shoes/${data.id}/`)
        closeModal()
    }

    return (
        <>
            {
                show ?
                    <div className="modal is-active">
                        < div className="modal-background" ></div >
                        <div className="modal-content">
                            <input className="input is-small" defaultValue={data.price} onChange={handlechange} type="text" placeholder="price" name="price" onClick={handlechange} />
                            <input className="input is-small" defaultValue={data.quantity} onChange={handlechange} type="text" placeholder="quantity" name="quantity" onClick={handlechange} />
                            <button className="button is-link is-fullwidth" onClick={updateData}>Update</button>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
                    </div >
                    :
                    <></>
            }
        </>
    )
}

export default Modal