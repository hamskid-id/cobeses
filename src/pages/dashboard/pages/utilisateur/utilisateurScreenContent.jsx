import { useRef, useState } from "react";
import { Modal } from "../../../../components/modal/modal"
import { Stat } from "./stat"
import { Table } from "./table"

export const UtilisateurContent=()=>{
    const[
        modalbody,
        setModalBody
    ]=useState("");

    const hideModal=useRef(null);
    return(
        <div>
            <Stat/>
            <Table
                setModalBody={setModalBody}
                hideModal={hideModal}
            />
            <Modal
                body={modalbody}
                small={true}
                hidemodal={hideModal}
                id="biblioBackdrop2"
            />
        </div>
    )
}