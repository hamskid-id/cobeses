import deleteicon from "../../../assets/delnoticon.svg"
import { Btn } from "../../../elements/button"
import { Text } from "../../../elements/text"

export const DeleteNotification=({handleClick,hideModal})=>{
    const hide=()=>{
        hideModal.current.click()
    }
    return(
        <div className="d-flex flex-column align-items-center p-2">
            <div className="mb-2">
                <img
                    src={deleteicon}
                />
            </div>
            <div className="mb-2">
                <Text
                    title="Supprimer la bibliothèque"
                    style="fw-600 fs-6"
                />
                <Text
                    title="Voulez-vous vraiment supprimer cette bibliothèque? Cela supprimera tous les membres dela bibliothèque"
                    style="fs-8 ln-20 mb-2"
                />
            </div>
            <div className="d-flex justify-content-between w-100">
                <Btn
                    style="btn border btn-md fs-8 w-50"
                    value="Non"
                    handleClick={hide}
                />
                <Btn
                    style="btn btn-danger btn-md fs-8 w-50 ms-2"
                    value="Oui, Supprimer"
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
}