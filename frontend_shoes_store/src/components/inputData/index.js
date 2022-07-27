import { useState } from "react";
import API from "../../infra/axios"

const InputData = () => {
    const [values, setValues] = useState({})
    const [isUpload, setUpload] = useState(false)
    const [file, setFile] = useState()

    const handlechange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value.toLowerCase() })
    }

    const sendData = async () => {
        if (!isUpload) {
            const response = await API.postData(values, '/api/shoes/')
        } else {
            const response = await API.uploadFile(file["file"], '/api/upload/')
        }

        window.location.reload(true)
    }

    const changeHeader = (event) => {
        if (event.target.name == "form") {
            setUpload(false)
        }
        else {
            setUpload(true)
        }
    }

    const onFileChange = (event) => {
        let formData = new FormData()
        formData.append("file", event.target.files[0])
        const fileName = event.target.files[0].name
        setFile({ "file": formData, "name": fileName })
    }

    return (
        <>
            <div className="tabs">
                <ul>
                    <li className={!isUpload ? "is-active" : ""}><a onClick={changeHeader} name="form">Fill Form</a></li>
                    <li className={isUpload ? "is-active" : ""}><a onClick={changeHeader} name="upload">Upload File</a></li>
                </ul>
            </div>
            {isUpload ?
                (
                    <div className="file has-name is-small is-fullwidth is-link" style={{ paddingBottom: 12 }}>
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume" onChange={onFileChange} />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Choose a file
                                </span>
                            </span>
                            <span className="file-name">
                                {!file ? "file name" : file.name}
                            </span>

                        </label>
                    </div>
                )
                : (
                    <div className="columns" style={{ marginBottom: 0 }}>
                        <div className="column is-narrow">
                            <input className="input is-small" type="text" placeholder="model" name="model" onChange={e => handlechange(e)} />
                        </div>
                        <div className="column is-narrow">
                            <input className="input is-small" type="text" placeholder="size" name="size" onChange={e => handlechange(e)} />
                        </div>
                        <div className="column is-narrow">
                            <div className="select is-small">
                                <select name="gender" onChange={e => handlechange(e)}>
                                    <option disabled selected hidden>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Unissex</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-narrow">
                            <input className="input is-small" type="text" placeholder="color" name="color" onChange={e => handlechange(e)} />
                        </div>
                        <div className="column is-narrow">
                            <input className="input is-small" type="text" placeholder="brand" name="brand" onChange={e => handlechange(e)} />
                        </div>
                        <div className="column is-narrow">
                            <div className="select is-small">
                                <select name="type" onChange={e => handlechange(e)}>
                                    <option disabled selected hidden>Type</option>
                                    <option>Botas</option>
                                    <option>Casual</option>
                                    <option>Sneaker</option>
                                    <option>Formal</option>
                                    <option>Sandalias</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-narrow">
                            <input className="input is-small" type="text" placeholder="price" name="price" onChange={e => handlechange(e)} />
                        </div>
                        <div className="column is-narrow">
                            <input className="input is-small" type="text" placeholder="quantity" name="quantity" onChange={e => handlechange(e)} />
                        </div>
                    </div>
                )}
            <div className="column is-narrow" style={{ margin: 0, padding: 0 }}>
                <button className="button is-link is-responsive is-fullwidth" onClick={sendData} style={{ marginBottom: 12, }}>Enviar</button>
            </div>

        </>

    )
}

export default InputData;