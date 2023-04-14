import { useState } from "react";
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import uploadIcon from "../../../../assets/uptype.svg";
import { UploadSpace } from "./uploadspace";

export const UploadType=({setModal})=>{
    const[
        uploadType,
        setUploadType
    ]=useState("");
    return(
        <div className="d-flex flex-column p-3 align-items-start">
            <div className="mb-3">
                <img
                    src={uploadIcon}
                    alt="object not found"
                />
            </div>
            <div>
                <Text
                    style="fs-7 fw-600"
                    title="Type de téléchargement de contenu"
                />
            </div>
            <div className="w-100 mb-3">
                <Text
                    style="fs-8 fw-600 faint text-start"
                    title="Veuillez sélectionner si vous téléchargez des documents, des livres audio ou des vidéos"
                />
            </div>
            <div className="mb-2">
                {
                    [ "manuels électroniques","Livres audio","Vidéos"].map((type,index)=>{
                        return(
                            <div 
                                className="d-flex align-items-center mb-2"
                                key={index}
                            >
                                <input 
                                    className="radio me-2 p-2"
                                    type="radio"
                                    value={uploadType}
                                    name="radio"
                                    onChange={()=>setUploadType(type)}
                                    id="radio"
                                />
                                <label
                                    className="radiolabel fs-8"
                                    htmlFor="radio">
                                    {type}
                                </label>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="w-100">
                <Btn
                    value="Continuer"
                    style=" text-white mb-1 btn btn-md w-100 bg-greyYellow"
                    handleClick={()=>setModal({
                        size:"xlarge",
                        body:<UploadSpace
                                setModal={setModal}
                            />
                    })}
                />
            </div>

        </div>
    )
}