const Modal = ({ show, closeModal, data }) => {
    return (
        <>
            {
                show ?
                    <div className="modal is-active">
                        < div className="modal-background" ></div >
                        <div className="modal-content">
                            <p>Any other Bulma elements you want</p>
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