import editupload from "../../../../assets/editup.svg"
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import { FormSpace } from "./formspace"

export const UploadSpace=({setModal})=>{
    return(
        <div className="d-flex flex-column w-100 p-5">
            <div className="mb-5">
                <Text
                    title="Apprenez à télécharger un livre sur COBESS"
                    style="fs-6 fw-bold text-center"
                />
            </div>
            <div className="uploadspace mb-3">
                <div className="mb-3">
                    <img
                        src={editupload}
                        alt="object not found"
                    />
                </div>
                <div>
                    <Text
                        style="fs-8 faint text-center"
                        title="Cliquez pour télécharger ou glisser-déposer"
                    />
                </div>
                <div className="w-100 mb-3">
                    <Text
                        style="fs-8 faint faint text-center"
                        title="Types de fichiers pris en charge: pdf, epub, doc
                        Vous devez détenir les droits d'auteur sur tout contenu que vous partagez."
                    />
                </div>
            </div>
            <div>
                <Btn
                    style="btn btn-md bg-greyYellow text-white ms-auto"
                    value="Continuer"
                    handleClick={()=>setModal({
                        size:"xlarge",
                        body:<FormSpace
                                setModal={setModal}
                            />
                    })}
                />
            </div>

        </div>
    )
}