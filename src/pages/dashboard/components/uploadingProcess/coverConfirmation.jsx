import successicon from "../../../../assets/warno.svg"
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"

export const CoverConfirmation=()=>{
    return(
        <div className="d-flex flex-column align-items-center p-2">
            <div className="mb-2">
                <img
                    src={successicon}
                />
            </div>
            <div className="mb-3">
                <Text
                    title="Vous essayez de télécharger ce livre sans couverture"
                    style="fw-bold fs-6"
                />
                <Text
                    title="Les livres sans couverture ont une visibilité moindre. Voulez-vous vraiment continuer sans couverture?"
                    style="faint fs-8 ln-20"
                />
            </div>
            <div className="w-100">
                <Btn
                    style="btn bg-greyYellow btn-md w-100 text-white mb-2 fs-8"
                    value="Ajouter une couverture"
                />
                <Btn
                    style="btn greyYellow btn-md border w-100 fs-8"
                    value="Continuer"
                />
            </div>
        </div>
    )
}