import DirForm from "./DirForm";

function AddressDir({ isOpen, closeModal }) {

    return (
        <div className="modal-overlay" style={{display: isOpen ? "flex" : "none"}}>
            <div className="modal-content">
                <div className="ly_cont" id="modal">
                    <section className="bl_sect ly_flex" style={{height: 'calc(100% - 30px - 42px)'}}>
                            <DirForm closeModal={closeModal}/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AddressDir;