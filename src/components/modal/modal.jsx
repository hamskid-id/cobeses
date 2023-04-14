export const Modal =({title,body,large,hidemodal,small,xlarge,id})=>{
    return(
        <div
            className="modal fade" 
            id={`${id?id:"staticBackdrop"}`}
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true">
            <div className={`modal-dialog ${large && `modal-lg`} ${xlarge && `modal-xl`} ${small && `modal-sm`}  modal-dialog-centered modal-dialog-scrollable `}>
                <div className="modal-content">
                    <div className="modal-header">
                        {
                            title &&(
                                    <h5 className="modal-title fw-bold">
                                        {title}
                                    </h5>
                            )
                        }
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            ref={hidemodal}
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    )
}