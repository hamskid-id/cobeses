import bookOpen from "../../../../assets/Book-open.svg";
import { IconTag } from "../../components/icontag";
import { BooksChart } from "./booksChart";
import save from "../../../../assets/save.svg";
import { BtnIconTag } from "../../components/btnIconTag";
import { BiblioCard } from "./bibliocard";
import { useRef, useState } from "react";
import { Modal } from "../../../../components/modal/modal";
export const LibrarybooksContent=()=>{
    const[
        modalbody,
        setModalBody
    ]=useState("");
    const hideModal=useRef(null);
    return(
        <div>
            <BooksChart/>
            <div>
                <div className="d-flex justify-content-between wrap mb-3">
                    <div>
                        <IconTag
                            text="Livres de la bibliothèque"
                            icon={bookOpen}
                        />
                    </div>
                    <span>
                        <BtnIconTag
                            icon={save}
                            text="Télécharger de nouveaux livres"
                        />
                    </span>
                </div>
                <BiblioCard
                    hideModal={hideModal}
                    setModalBody={setModalBody}
                />
            </div>
            <Modal
                body={modalbody}
                small={true}
                hidemodal={hideModal}
            />
        </div>
    )
}