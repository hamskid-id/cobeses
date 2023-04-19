import { Text } from "../../../../elements/text"
import solid2 from "../../../../assets/Solidmessage2.svg"
import { SendMessage } from "./sendMessageModal"


export const Pannel=({
    name,
    subName,
    icon,
    setModalBody,
    hideModal
})=>{
    const handleClick=()=>{
        if(name==="Send Us A Message"){
            setModalBody(
                <SendMessage
                    setModalBody={setModalBody}
                    hideModal={hideModal}
                />
            )
        }
    }
    return(
        <button 
            className="d-flex bg-white align-items-center justify-content-between p-2 br-8 mt-4 border btn w-100"
            data-bs-toggle="modal" 
            data-bs-target="#biblioBackdrop3"
            onClick={handleClick}
        >
            <div>
                <Text
                    title={name}
                    style="fw-600 text-start fs-8"
                />
                <Text
                    title={subName}
                    style="faint fs-8 text-start"
                />
            </div>
            <div>
                <img 
                    src={icon?icon:solid2}
                    alt="object not found"
                />
            </div>
        </button>
    )
}