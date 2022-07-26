import { useState } from "react";
import API from "../../infra/axios"

const InputData = () => {
    const [values, setValues] = useState({})

    const handlechange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value.toLowerCase() })
    }

    const sendData = async () => {
        const response = await API.postData(values, '/api/shoes/')
    }

    return (
        <div className="columns">
            <div className="column is-narrow">
                <input className="input is-small" type="text" placeholder="modelo" name="model" onChange={e => handlechange(e)} />
            </div>
            <div className="column is-narrow">
                <input className="input is-small" type="text" placeholder="tamanho" name="size" onChange={e => handlechange(e)} />
            </div>
            <div className="column is-narrow">
                <div className="select is-small">
                    <select name="gender" onChange={e => handlechange(e)}>
                        <option disabled selected hidden>Genero</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Unissex</option>
                    </select>
                </div>
            </div>
            <div className="column is-narrow">
                <input className="input is-small" type="text" placeholder="cor" name="color" onChange={e => handlechange(e)} />
            </div>
            <div className="column is-narrow">
                <input className="input is-small" type="text" placeholder="marca" name="brand" onChange={e => handlechange(e)} />
            </div>
            <div className="column is-narrow">
                <div className="select is-small">
                    <select name="type" onChange={e => handlechange(e)}>
                        <option disabled selected hidden>Estilo</option>
                        <option>Botas</option>
                        <option>Casual</option>
                        <option>Sneaker</option>
                        <option>Formal</option>
                        <option>Sandalias</option>
                    </select>
                </div>
            </div>
            <div className="column is-narrow">
                <input className="input is-small" type="text" placeholder="preço" name="price" onChange={e => handlechange(e)} />
            </div>
            <div className="column is-narrow">
                <input className="input is-small" type="text" placeholder="quantidade" name="quantity" onChange={e => handlechange(e)} />
            </div>
            <div className="column is-narrow">
                <button className="button is-link is-small" onClick={sendData}>Enviar</button>
            </div>
        </div>
    )
}

export default InputData;