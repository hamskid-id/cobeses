import editicon from "../../../../assets/editlib.svg"
import editupload from "../../../../assets/editup.svg"
import { Text } from "../../../../elements/text"
import { Btn } from "../../../../elements/button"
export const InviteUsersToLibrary=()=>{
    
    return(
        <div className="p-1 br-8 d-flex flex-column align-items-start">
            <img 
                src={editicon}
                alt="object not found"
                className="mb-3"
            />
            <Text
                style="fw-600 fs-6 text-start mb-2"
                title="Inviter un utilisateur à la bibliothèque"
            />
             <Text
                style="faint mb-1 fs-8 text-start"
                title="Ajoutez des utilisateurs par e-mail à votre bibliothèque enregistrée ou téléchargez par lots un fichier .csv"
            />
            <form  
                className="w-100 d-flex flex-column"
            >
                <div className=" d-flex flex-column align-items-start w-100 mb-2 relative">
                    <label
                        className="fs-8 fw-600 text-start"
                        htmlFor="emails">
                        Emails
                    </label>
                    <input 
                        className="p-08 border mb-2 w-100 border fs-8 br-8 textArea"
                        type="text"
                    />
                </div>
                <label className="text-start fs-8 fw-bold">
                    Upload CSV
                </label>
                <div className="d-flex flex-column align-items-center mb-3 border br-8">
                    <div>
                        <label 
                            htmlFor="upload"
                            className="p-2 br-8 w-100"
                        >
                            <img 
                                src={editupload}
                                alt="object not found"
                                className="mb-3"
                            />
                            <Text
                                style="fw-600 fs-8 greyYellow"
                                title="Cliquez pour télécharger ou glisser-déposer"
                            />
                            <Text
                                style="faint mb-2 fs-8"
                                title="SVG, PNG, JPG ou GIF (max. 800x400px)"
                            />
                        </label>
                    </div>
                    <input id="upload" type="file" accept="image/*"/>
                </div>
                <Btn
                    value="Inviter un utilisateur"
                    style="w-100 btn btn-md bg-greyYellow mb-2 p-08 text-white fs-8"
                />
            </form>
            </div>
    )
}