import successicon from "../../../assets/sucicon.svg"
import { Btn } from "../../../elements/button"
import { Text } from "../../../elements/text"

export const SuccessNotification=({hideModal})=>{

    const hide=()=>{
        hideModal.current.click()
    }

    return(
        <div className="d-flex flex-column align-items-center p-2">
            <div className="mb-2">
                <img
                    src={successicon}
                />
            </div>
            <div className="mb-2">
                <Text
                    title="Suppression réussieie"
                    style="fw-bold fs-6"
                />
                <Text
                    title="Votre bibliothèque a été supprimée avec succès."
                    style="faint fs-8 ln-20"
                />
            </div>
            <div className="w-100">
                <Btn
                    style="btn bg-greyYellow btn-md w-100 text-white"
                    value="Continuer"
                    handleClick={hide}
                />
            </div>
        </div>
    )
}