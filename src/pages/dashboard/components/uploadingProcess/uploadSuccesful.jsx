import action from "../../../../assets/_Modal actions.svg"
import successicon from "../../../../assets/sucicon.svg"
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"

export const SuccessFull=()=>{
    return(
        <div className="d-flex flex-column align-items-center p-2">
        <div className="mb-2">
            <img
                src={successicon}
            />
        </div>
        <div className="mb-3">
            <Text
                title="Téléchargement réussi"
                style="fw-bold fs-6"
            />
        </div>
        <div className="w-100">
            <Btn
                style="btn bg-greyYellow btn-md w-100 text-white mb-2 fs-8"
                value="Voir le livre"
            />
            <img
                src={action} 
                alt="object not found"
                className="btn w-100"
            />
        </div>
    </div>
    )
}