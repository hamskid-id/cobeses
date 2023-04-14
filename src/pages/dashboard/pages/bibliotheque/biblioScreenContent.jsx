import { Text } from "../../../../elements/text"
import { IconTag } from "../../components/icontag"
import bookOpen from "../../../../assets/Book-open.svg"
import icon from "../../../../assets/btnIcon.svg"
import { Bibliocard } from "./bibliocard"
import { useRef, useState } from "react"
import { BtnIconTag } from "../../components/btnIconTag"
import { Modal } from "../../../../components/modal/modal"

export const BiblioContent=()=>{
    const[
        modalbody,
        setModalBody
    ]=useState("");
    const hideModal=useRef(null);
    return(
        <>
            <div>
                <div className="d-flex justify-content-between wrap mb-3 w-100">
                    <div>
                        <IconTag
                            text="Bibliothèque"
                            icon={bookOpen}
                        />
                    </div>
                    <span>
                        <BtnIconTag
                            icon={icon}
                            text="Créer une bibliothèque"
                        />
                    </span>
                </div>
                <div>
                    <Bibliocard
                        hideModal={hideModal}
                        setModalBody={setModalBody}
                    />
                </div>
            </div>
            <Modal
                body={modalbody}
                small={true}
                hidemodal={hideModal}
                id="biblioBackdrop"
            />
        </>
        
    )
}